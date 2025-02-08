import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";

type TypographyProps = {
  component?: React.ElementType;
  variant?: "h1" | "h2" | "p";
  children: React.ReactNode;
  className?: string;
};

const Typography = ({
  component = "p",
  variant,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = component;

  // variant未指定だとstyleを適用しない
  const fontStyle = variant
    ? match(variant)
        .with("h1", () => clsx("text-3xl", "font-bold"))
        .with("h2", () => clsx("text-xl", "font-bold"))
        .with("p", () => clsx("text-sm"))
        .exhaustive()
    : "";

  // variant, className共に未指定だとclassを出力しない
  const mergedClassName =
    variant || className ? twMerge(fontStyle, className) : undefined;

  return (
    <Component className={mergedClassName} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
