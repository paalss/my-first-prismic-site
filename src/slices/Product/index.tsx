import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicProduct,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import styles from "./index.module.css";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `Product`.
 */
type ProductProps = SliceComponentProps<Content.ProductSlice>;

/**
 * Component for "Product" Slices.
 */
const Product = ({ slice }: ProductProps): JSX.Element => {
  return (
    <section className={styles.richtext}>
      <PrismicProduct field={slice.primary.content} components={components} />
    </section>
  );
};

export default Product;
