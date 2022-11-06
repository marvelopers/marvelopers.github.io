import React, { AnchorHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from '@emotion/styled';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  blank?: boolean;
  children?: ReactNode;
}

type LinkProps = Omit<AnchorProps, 'href'> & NextLinkProps;

const Link = ({
  className,
  title,
  children,
  href = '/',
  blank = false,
  replace = false,
  as,
  onClick,
  onClickCapture,
}: LinkProps) => {
  console.log('href', href);
  return (
    <NextLink href={href} onClick={onClick} className={className} title={title}>
      {children}
    </NextLink>
  );
};
export default Link;
