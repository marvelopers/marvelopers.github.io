---
title: "[디자인패턴] 팩토리 패턴"
date: 2021-02-04
category: front
tags: [java,design-patterns]
draft: false
layout: post
---


# 팩토리 패턴

## 팩토리 패턴의 핵심

- 이름처럼 객체 생성을 하는 공장을 가지고 있는 패턴
- 메인 클래스에는 변하지 않는 부분을 서브클래스에는 변할가능성이 있는 부분을 나눠 관리한다.
- 클래스의 인스턴스를 서브 클래스에서 결정한다는 것!
- 서브클래스가 new 키워드를 담당하도록 하여 객체 생성을 캡슐화 하고 구상 클래스에 대한 의존성과 결합도를 줄인다.
- 클래스 간의 결합도가 낮아 하나의 클래스가 수정되더라도 다른 클래스가 영향을 덜 받기 때문에 전체 프로젝트의 확장성를 높일 수 있다.

## 팩토리 패턴

- 팩토리 메서드 패턴 : 객체를 생성하기 위한 인터페이스를 정의해야 하는데,  어떤 클래스의 인스턴스를 만들지 서브 클래스에서 결정하도록 한다.
- 추상 팩토리 패턴 : '추상화된 것에 의존하도록 구성한다. 구상 클래스에 의존하지 않도록 만든다'라는 디자인 원칙에 기인한 패턴이다. 인터페이스를 이용하여 서로 연관된 객체를 구상 클래스를 지정하지 않고도 생성할 수 잇다. 추상 팩토리 패턴에는 팩토리 메서드 패턴이 포함될 수 있다.
- 모든 팩토리 패턴에서는 객체 생성을 '캡슐화'한다.

### 의존성 뒤집기 원칙 (Dependency Inversion Principle:DI)

- 싱글톤 패턴과 함께 가장 유명하고 널리 쓰이는 디자인 패턴 중 하나로 Spring 프레임워크의 핵심 개념 중 하나이다.
- '추상화 된 것에 의존하도록 만들어라'는 원칙에 따른다.
- 고수준 구성요소와 저수준 구성요소들은 모두 하나의 추상 클래스에 의존한다.
    - 의존성 뒤집기의 3가지 원칙
        1. 어떤 변수에도 구상 클래스에 대한 레퍼런스를 지정하지 않는다.
        2. 구상 클래스에서 유도된 클래스를 만들지 않는다.
        3. 메인 클래스에서 이미 구현되어 있던 메서드를 오버라이드 하지 않는다.

## EX) PizzaStore

### 1. 팩토리 메서드 패턴

1. 피자가게 → 피자 종류 : 치즈, 페퍼로니 등등 
              → 피자가게 지점 : 뉴욕, 시카고, 캘리포니아 등등
⇒ 모든 피자 만드는 방식을 통일해야 한다!?

1.1 PizzaStore : Pizza 인스턴스를 만드는 일은 팩토리 역할을 하는 메소드에서 맡아 처리한다. 

```java
public abstract class PizzaStore {
	public Pizza orderPizza(String type) {
		 Pizza pizza;
		 pizza = createPizza(type);
		 pizza.prepare();
		 pizza.bake(); 
		 pizza.cut(); 
		 pizza.box(); 
		return pizza; 
	} 
abstract Pizza createPizza(String type); 
}
```

1.2 ChicagoPizzaStore : PizzaStore를 상속받아 시카고 피자조리법을 만든다. 

```java
public class ChicagoPizzaStore extends PizzaStore {
	@override
	Pizza createPizza (String type){
		Pizza pizza = null;
		
		if(type.equals('cheese'){
			Pizza = new ChicagoStyleCheesePizza();
		}
		if(type.equals('pepper'){
			Pizza = new ChicagoStylepepperPizza();
		}
		if(type.equals('veggie'){
			Pizza = new ChicagoStyleVeggiePizza();
		}
		return pizza;
	}
}
```

1.3 Pizza 피자 제조 과정은 이렇게 정한다. 

```java
public abstract class Pizza {
	String name;
	String dough;
	String sauce;
	ArrayList<String> toppings = new ArrayList<>();
	void prepar(){
		System.out.println("Preparing " + name);
		System.out.println("Toppings dough...");
		System.out.println("Adding sauce...");
		System.out.println("Adding toppings...");
		for(int i = 0; i < toppings.size(); i++){
			System.out.println(toppings.get(i));
		}
	}
	void bake() {
		System.out.println("Bake for 25 minutes at 350"); 
	}
	void cut() {
		System.out.println("Cutting the pizza into diagonal slice"); 
	}
	void box() {
		System.out.println("Place pizza in official PizzaStroe box");
	}
	public String getName() {
		return this.name;
	}
}
```

1.4 ChicagoStyleCheesePizza를 Pizza를 상속받아서 만든다. 

```java
public class ChicagoStyleCheesePizza extends Pizza {
  public ChicagoStyleCheesePizza() {
    name = "Chicago Style Deep Dish Cheese Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce"; 
    toppings.add("Shredded Mozzarella Cheese");
  }
  @Override void cut() {
    System.out.println("Cutting the pizza into sqaare slices");
  }
}
```

```java
public class PizzaTestDrive {
  public static void main(String[] args) {
    PizzaStore chicagoStore = new ChicagoPizzaStore();
    Pizza chicagoStylePizza = chicagoStore.orderPizza("cheese");
    System.out.println(chicagoStylePizza.getName());
  }
}
```

### 2. 추상 팩토리 패턴

1. PizzaingredientFactory : 지역별로 공장을 만든다.
2. ReggianoCheese, RedPeppers, ThickCrustDough : 공장에서 사용할 재료 클래스를 구현한다.
3. PizzaStore : 모든 것을 조합해 피자를 만든다.

2.1 PizzaingredientFactory : 지역별로 공장을 만든다.

```java
public interface PizzaIngredientFactory {
  public Dough createDough();
  public Sauce createSauce();
  public Cheese createCheese();
  public Veggies[] createVeggies();
  public Pepperoni createPepperoni();
  public Clams createClams();
}
```

2.2 ReggianoCheese, RedPeppers, ThickCrustDough : 공장에서 사용할 재료 클래스를 구현한다.

```java
public class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  @Override
  public Dough createDough() {
    return null;
  }
  @Override
  public Sauce createSauce() {
    return null;
  }
  @Override
  public Cheese createCheese() {
    return null;
  }
  @Override
  public Veggies[] createVeggies() {
    return null;
  }
  @Override
  public Pepperoni createPepperoni() {
    return null;
  }
  @Override
  public Clams createClams() {
    return null;
  }
}
```

2.3 PizzaStore : 모든 것을 조합해 피자를 만든다.

```java
public class CheesePizza extends Pizza {
  PizzaIngredientFactory ingredientFactory;
  public CheesePizza(PizzaIngredientFactory ingredientFactory) {
    this.ingredientFactory = ingredientFactory;
  }
  @Override
  public void prepare() {
    this.dough = ingredientFactory.createDough();
    this.sauce = ingredientFactory.createSauce();
    this.cheese = ingredientFactory.createCheese();
  }
  public PizzaIngredientFactory getIngredientFactory() {
    return ingredientFactory;
  }
  public void setIngredientFactory(PizzaIngredientFactory ingredientFactory) {
    this.ingredientFactory = ingredientFactory;
  }
}
```

2.5 지점 별로 피자가게를 만든다.

```java
public class ChicagoPizzaStore extends PizzaStore {
  @Override
  public Pizza createPizza(String type) {
    Pizza pizza = null;
    PizzaIngredientFactory ingredientFactory = new ChicagoPizzaingredientFactory();
    if (type.equals("cheese")) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName(ingredientFactory.Chicago_STYLE + " Cheese Pizza");
    } else if (type.equals("peper")) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName(ingredientFactory.Chicago_STYLE + " Pepperoni Pizza");
    } else if (type.equals("clam")) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName(ingredientFactory.Chicago_STYLE + " Clam Pizza");
    } else if (type.equals("veggie")) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName(ingredientFactory.Chicago_STYLE + " Veggie Pizza");
    }
    return pizza;
  }
}
```

```java
public class NYPizzaStore extends PizzaStore {
  @Override
  public Pizza createPizza(String type) {
    Pizza pizza = null;
    PizzaIngredientFactory ingredientFactory = new NYPizzaingredientFactory();
    if (type.equals("cheese")) {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName(ingredientFactory.NY_STYLE + " Cheese Pizza");
    } else if (type.equals("peper")) {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName(ingredientFactory.NY_STYLE + " Pepperoni Pizza");
    } else if (type.equals("clam")) {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName(ingredientFactory.NY_STYLE + " Clam Pizza");
    } else if (type.equals("veggie")) {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName(ingredientFactory.NY_STYLE + " Veggie Pizza");
    }
    return pizza;
  }
}
```

>> 사용 

1. NY 피자가게를 만든다.

```java
//1. 뉴욕 피자가게를 만든다.
PizzaStore nyPizzaStore = new NYPizzaStore();

//2.주문을 한다
nyPizzaStore.orderPizza(“cheese”);

//3.orderPizza 메소드에서 우선 createPizza() 메서드를 호출한다
Pizza pizza = createPizza(“cheese”);

//4.createPizza() 메서드가 호출되면 원재료 공장이 돌아가기 시작한다.
Pizza pizza = new CheesePizza(nyIngredientFactory);

//5.피자를 준비하는 prepare() 메서드가 호출되면 팩토리에 원재료 주문이 들어간다.
void prepare(){
	dough = nyIngredientFactory.createDough();
	sauce = nyIngredientFactory.createSauce();
	cheese = nyIngredientFactory.createCheese();
}

//6. 준비단계가 끝나고 orderPizza() 메소드에서는 피자를 굽고, 자르고, 포장한다.
```
