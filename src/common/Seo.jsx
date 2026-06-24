import Head from 'next/head';
import React from 'react';

export default function Seo({ title, descrption, canonical }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={descrption} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {canonical && <link rel="canonical" href={canonical} />}
        </Head>
    );
}
