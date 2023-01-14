import React from "react";
import App, { Container } from "next/app";

import Menu from "../components/Menu";
import "../github-gist.css";
import "../styles/globals.css";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <div className="leading-normal">
          <div className="sticky top-0 z-10 h-16 py-2 px-4 flex items-center bg-violet-600 text-violet-500">
            <a className="rounded border-red-800 text-violet-100 no-underline border w-2 text-2xl h-8 flex justify-center items-center" href="/">T</a>
          </div>
          <div className="flex">
            <Menu className="sticky w-48 flex-no-grow flex-shrink border-r" />

            <div
              className="py-8 px-10"
              style={{ maxWidth: "75%", flexBasis: "66.6667%" }}
            >
              <Component {...pageProps} />
            </div>

            <div
              className="sticky w-48 flex-no-grow flex-shrink border-l p-4 right-0 hidden xl:block"
              style={{ flexBasis: 320 }}
            >
              {" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}
