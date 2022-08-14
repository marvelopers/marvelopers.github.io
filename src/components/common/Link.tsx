import React, {
  AnchorHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styled from "@emotion/styled";

const Anchor = styled.a`
  text-decoration: none;
`;

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  blank?: boolean;
  children?: ReactNode;
}

// eslint-disable-next-line react/display-name
export const A = React.forwardRef(
  (
    {
      className,
      children,
      href,
      title,
      blank = false,
      onClick,
      onClickCapture,
    }: AnchorProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => (
    <Anchor
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      title={title || href}
      className={className}
      onClick={onClick}
      onClickCapture={onClickCapture}
      ref={ref}
    >
      {blank ? <>{children}</> : children}
    </Anchor>
  )
);

type LinkProps = Omit<AnchorProps, "href"> & NextLinkProps;

const Link = ({
  className,
  title,
  children,
  href = "/",
  blank = false,
  replace = false,
  as,
  onClick,
  onClickCapture,
}: LinkProps) => {
  console.log("href", href);
  return (
    <NextLink href={href}>
      <A
        className={className}
        title={title}
        blank={blank}
        onClick={onClick}
        onClickCapture={onClickCapture}
      >
        {children}
      </A>
    </NextLink>
  );
};
export default Link;
