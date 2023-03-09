import React from "react";
import { SpotifyEmbed } from "spotify-embed";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Defence Labs Live</title>
        <meta name="description" content="defence labs live" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SpotifyEmbed
        src="https://open.spotify.com/playlist/7t7AYUmCzKFEFDmP3IDn9a"
        theme="dark"
        size="custom"
        width={"100%"}
        height={"900"}
      />
    </div>
  );
}
