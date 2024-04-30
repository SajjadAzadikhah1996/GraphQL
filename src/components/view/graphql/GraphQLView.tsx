'use client';

import React from 'react';
import {GraphiQL} from 'graphiql';
import {createGraphiQLFetcher} from '@graphiql/toolkit';
import 'graphiql/graphiql.css';

const fetcher = createGraphiQLFetcher({ url: process.env.NEXT_PUBLIC_GRAPHQL_URL as string });

export default function GraphQLView() {
    return (
        <div className = 'h-screen'>
            <GraphiQL fetcher = {fetcher}/>
        </div>
    );
};