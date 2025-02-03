import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/remotion-test/blog',
    component: ComponentCreator('/remotion-test/blog', '902'),
    exact: true
  },
  {
    path: '/remotion-test/blog/archive',
    component: ComponentCreator('/remotion-test/blog/archive', 'c6a'),
    exact: true
  },
  {
    path: '/remotion-test/blog/authors',
    component: ComponentCreator('/remotion-test/blog/authors', 'a16'),
    exact: true
  },
  {
    path: '/remotion-test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/remotion-test/blog/authors/all-sebastien-lorber-articles', '450'),
    exact: true
  },
  {
    path: '/remotion-test/blog/authors/yangshun',
    component: ComponentCreator('/remotion-test/blog/authors/yangshun', '76c'),
    exact: true
  },
  {
    path: '/remotion-test/blog/first-blog-post',
    component: ComponentCreator('/remotion-test/blog/first-blog-post', 'b5c'),
    exact: true
  },
  {
    path: '/remotion-test/blog/long-blog-post',
    component: ComponentCreator('/remotion-test/blog/long-blog-post', '9c9'),
    exact: true
  },
  {
    path: '/remotion-test/blog/mdx-blog-post',
    component: ComponentCreator('/remotion-test/blog/mdx-blog-post', '8fe'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags',
    component: ComponentCreator('/remotion-test/blog/tags', 'e42'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/docusaurus',
    component: ComponentCreator('/remotion-test/blog/tags/docusaurus', 'c60'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/facebook',
    component: ComponentCreator('/remotion-test/blog/tags/facebook', '667'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/hello',
    component: ComponentCreator('/remotion-test/blog/tags/hello', '201'),
    exact: true
  },
  {
    path: '/remotion-test/blog/tags/hola',
    component: ComponentCreator('/remotion-test/blog/tags/hola', '9cd'),
    exact: true
  },
  {
    path: '/remotion-test/blog/welcome',
    component: ComponentCreator('/remotion-test/blog/welcome', 'b70'),
    exact: true
  },
  {
    path: '/remotion-test/markdown-page',
    component: ComponentCreator('/remotion-test/markdown-page', '517'),
    exact: true
  },
  {
    path: '/remotion-test/',
    component: ComponentCreator('/remotion-test/', 'd0e'),
    exact: true
  },
  {
    path: '/remotion-test/',
    component: ComponentCreator('/remotion-test/', '06e'),
    routes: [
      {
        path: '/remotion-test/',
        component: ComponentCreator('/remotion-test/', 'e17'),
        routes: [
          {
            path: '/remotion-test/',
            component: ComponentCreator('/remotion-test/', '04c'),
            routes: [
              {
                path: '/remotion-test/category/tutorial---basics',
                component: ComponentCreator('/remotion-test/category/tutorial---basics', 'b6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/category/tutorial---extras',
                component: ComponentCreator('/remotion-test/category/tutorial---extras', 'bb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/intro',
                component: ComponentCreator('/remotion-test/intro', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-basics/congratulations',
                component: ComponentCreator('/remotion-test/tutorial-basics/congratulations', '299'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/remotion-test/tutorial-basics/create-a-blog-post', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-basics/create-a-document',
                component: ComponentCreator('/remotion-test/tutorial-basics/create-a-document', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-basics/create-a-page',
                component: ComponentCreator('/remotion-test/tutorial-basics/create-a-page', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/remotion-test/tutorial-basics/deploy-your-site', 'a17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-basics/markdown-features',
                component: ComponentCreator('/remotion-test/tutorial-basics/markdown-features', '6b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/remotion-test/tutorial-extras/manage-docs-versions', 'd25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/remotion-test/tutorial-extras/translate-your-site',
                component: ComponentCreator('/remotion-test/tutorial-extras/translate-your-site', 'ec3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
