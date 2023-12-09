import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import styles from "./theme.config.module.scss";

const currentYear = new Date().getFullYear();
const BANNER_OPTION = {
  banner: {
    key: "New release is out!",
    text: "New release is out!",
  },
};
const SHOULD_SHOW_BANNER = false;
const bannerOption = SHOULD_SHOW_BANNER ? BANNER_OPTION : undefined;

const config: DocsThemeConfig = {
  ...bannerOption,
  project: {
    link: "https://github.com/beeker-tech",
  },
  chat: {
    link: "https://discord.gg/PrEMvfBh",
  },
  docsRepositoryBase: "https://github.com/beeker-tech/docs/blob/main",
  editLink: {
    text: "Edit this page on GitHub",
  },
  footer: {
    text: (
      <p>
        Pamplem -&nbsp;
        <span style={{ fontSize: "0.75rem" }}>
          Copyright © 2023-{currentYear}
        </span>
      </p>
    ),
  },
  primaryHue: 202,
  primarySaturation: 96,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Beeker",
    };
  },
  logo: (
    <span>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 69.52 21.34"
        height="30"
      >
        <title>full-logo-extension-docs-v2</title>
        <path
          d="M270,149.53c0,1.61-1.4,2.55-4,2.55h-5.29v-9.31h5c2.58,0,3.84,1,3.84,2.44a2.19,2.19,0,0,1-1.32,2A2.37,2.37,0,0,1,270,149.53Zm-6.58-4.86v1.8h1.9c.92,0,1.4-.31,1.4-.9s-.48-.89-1.4-.89Zm3.78,4.56c0-.64-.5-.94-1.46-.94h-2.33v1.89h2.33C266.67,150.18,267.17,149.88,267.17,149.24Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          d="M278.81,150.05v2h-7.87v-9.31h7.69v2h-4.94v1.57H278v2h-4.36v1.7Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          d="M287.73,150.05v2h-7.87v-9.31h7.69v2H282.6v1.57H287v2H282.6v1.7Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          d="M292.57,148.71l-1,1.05v2.33h-2.75v-9.31h2.75v3.87l3.8-3.87h3.05l-4,4.12,4.22,5.19h-3.22Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          d="M306.71,150.05v2h-7.87v-9.31h7.69v2h-4.95v1.57h4.36v2h-4.36v1.7Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          d="M312,149.61h-1.51v2.47h-2.77v-9.31h4.48c2.68,0,4.36,1.32,4.36,3.45a3.08,3.08,0,0,1-1.92,2.94l2.12,2.93h-3Zm0-4.76h-1.54v2.73h1.54c1.15,0,1.72-.51,1.72-1.36S313.22,144.85,312.07,144.85Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          className={styles.logo}
          d="M321,150.3c-.75-1.08-1.55-2.11-2.25-3.25a5.53,5.53,0,0,1-.89-3.25c.11-2,1.27-3.28,2.64-3s2.46,2.08,2.36,4.07a12.62,12.62,0,0,1-1.41,4.78c-.09.2-.17.4-.25.6s-.08.21-.21,0"
          transform="translate(-260.65 -140.79)"
        />
        <path
          className={styles.logo}
          d="M321.19,150.3c.83-1,1.6-2.06,2.5-3.05a5.54,5.54,0,0,1,2.88-1.75c1.91-.43,3.5.32,3.59,1.72s-1.32,2.93-3.26,3.39a12.59,12.59,0,0,1-5,0l-.65-.08c-.2,0-.22,0-.08-.19"
          transform="translate(-260.65 -140.79)"
        />
        <rect
          className={styles.docsBackground}
          x="34.61"
          y="13.05"
          width="21.77"
          height="8.3"
          rx="1.86"
          ry="1.86"
        />
        <path
          className={styles.docsText}
          d="M297.94,155.11H300c1.57,0,2.51.83,2.51,2.13a3,3,0,0,1-3.21,3h-2.41Zm1.41,4.35a2.07,2.07,0,0,0,2.22-2.16c0-.85-.55-1.38-1.64-1.38h-1.19l-.71,3.54Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          className={styles.docsText}
          d="M302.94,158.59a2.24,2.24,0,0,1,2.34-2.3A1.71,1.71,0,0,1,307.2,158a2.26,2.26,0,0,1-2.34,2.31A1.72,1.72,0,0,1,302.94,158.59Zm3.32-.53a.93.93,0,0,0-1-1,1.37,1.37,0,0,0-1.36,1.47.93.93,0,0,0,1,1A1.37,1.37,0,0,0,306.27,158.06Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          className={styles.docsText}
          d="M307.7,158.59a2.25,2.25,0,0,1,2.36-2.3,1.76,1.76,0,0,1,1.69.92l-.79.41a1,1,0,0,0-1-.55,1.37,1.37,0,0,0-1.36,1.47.93.93,0,0,0,1,1,1.25,1.25,0,0,0,1.08-.55l.68.46a2.13,2.13,0,0,1-1.8.88A1.73,1.73,0,0,1,307.7,158.59Z"
          transform="translate(-260.65 -140.79)"
        />
        <path
          className={styles.docsText}
          d="M311.62,159.89l.38-.71a2.49,2.49,0,0,0,1.37.38c.6,0,.89-.18.89-.47,0-.65-2.13-.15-2.13-1.48,0-.83.75-1.33,1.87-1.33a2.81,2.81,0,0,1,1.42.34l-.34.71a2.2,2.2,0,0,0-1.16-.3c-.6,0-.88.21-.88.48,0,.68,2.13.17,2.13,1.48,0,.86-.78,1.33-1.89,1.33A3,3,0,0,1,311.62,159.89Z"
          transform="translate(-260.65 -140.79)"
        />
      </svg>
    </span>
  ),
  // To add links to your github and discord, see the following example:
  // https://github.com/shuding/nextra-docs-template/blob/main/theme.config.tsx
};

export default config;
