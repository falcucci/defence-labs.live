import React from "react";
import { SpotifyEmbed } from "spotify-embed";
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ margin: "0", padding: "0", background: "#000" }}>
      <Head>
        <title>Country Flags</title>
        <meta name="description" content="Get country flags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SpotifyEmbed
        src="https://open.spotify.com/playlist/7t7AYUmCzKFEFDmP3IDn9a?si=1d390f3a33bc48e9"
        theme="dark"
        size="custom"
        width={"100%"}
        height={"900"}
      />
    </div>
  );
}
