({
    block: 'page',
    mods: {theme: 'alfa', bkg: 'color'},
    title: 'Demo Alfa-Bank UI',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}}
    ],
    styles: [
        {elem: 'css', url: 'menus.min.css'}
    ],
    scripts: [
        {elem: 'js', url: 'menus.min.js'}
    ],
    content : [
        {
            elem : 'inner',
            content : [
                {
                    elem : 'header',
                    content : [
                        { block : 'header' }
                    ]
                },
                {
                    elem : 'content',
                    content : [
                        {
                            block : 'app',
                            content : [
                                {
                                    block : 'heading',
                                    mods : { theme : 'alfa', bkg : 'color' },
                                    content : 'Меню'
                                },
                                {
                                    block : 'menus'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                { block : 'footer' }
            ]
        }
    ]
})