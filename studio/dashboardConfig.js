export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601019c51af1fc46da116d86',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6a9und2f',
                  apiId: '2ffc27b5-155a-40fa-9570-5f3ed01b589e'
                },
                {
                  buildHookId: '601019c5d3253000f30dc1d1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7mzhm4ou',
                  apiId: 'c7d56970-5a2f-479a-b5cc-328ea1c18a74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toshaugh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7mzhm4ou.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
