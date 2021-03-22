import path from 'path'

import React from 'react';
import { renderToString } from 'react-dom/server';
import express, { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import { Helmet } from 'react-helmet';

import App from 'App';


export default express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', appRequestHandler);


function appRequestHandler(req: Request, res: Response) {

  const extractor = new ChunkExtractor({
    statsFile: path.resolve('build/loadable-stats.json'),
    entrypoints: ['client'],
  });

  const context = {};
  const markup = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ChunkExtractorManager>
  );

  const helmet = Helmet.renderStatic();

  // @ts-ignore
  if (context.url) {
    // @ts-ignore
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        ${helmet.title.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1">
         ${helmet.meta.toString()}
         ${helmet.base.toString()}
         ${extractor.getLinkTags()}
         ${helmet.link.toString()}
         ${extractor.getStyleTags()}
         ${helmet.style.toString()}
         </head>
         <body ${helmet.bodyAttributes.toString()}>
         <div id="root">${markup}</div>
         ${extractor.getScriptTags()}
         ${helmet.script.toString()}
    </body>
</html>`
    );
  }
}
