({
    block : 'page',
    mods : { theme : 'alfa-on-color' },
    title : 'Alfa-Bank UI',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
    ],
    styles : [
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [
        { elem : 'js', url : 'index.min.js' }
    ],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'heading',
                    mods : { theme : 'alfa-on-color' },
                    mix : [{ block : 'align', mods : { hor : 'center' }    }],
                    content : 'Компоненты интерфейса'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Логотипы'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 's', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 's', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 'm', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 'm', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 'l', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 'l', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', view : 'icon' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'logo',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', view : 'full' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [

                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Заголовки'
                        },
                        {
                            elem : 'examples',
                            content : [
                                {
                                    block : 'heading',
                                    mods: { theme: 'alfa-on-color' },
                                    content : 'h1. Заголовок первого уровня'
                                },
                                {
                                    block : 'heading',
                                    mods: { theme: 'alfa-on-color' },
                                    lvl : 2,
                                    content : 'h2. Заголовок второго уровня'
                                },
                                {
                                    block : 'heading',
                                    mods: { theme: 'alfa-on-color' },
                                    lvl : 3,
                                    content : 'h3. Заголовок третьего уровня'
                                },
                                {
                                    block : 'heading',
                                    mods: { theme: 'alfa-on-color' },
                                    lvl : 4,
                                    content : 'h4. Заголовок четвертого уровня'
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Параграфы'
                        },
                        {
                            elem : 'examples',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { type : 'lead', theme: 'alfa-on-color' },
                                    content : [
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст. ',
                                        'Это заглавный параграф, в котором абсолютно бестолковый текст.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods: { theme: 'alfa-on-color' },
                                    content : [
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст. ',
                                        'Это обычный параграф, в котором такой же бестолковый текст.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods: { theme: 'alfa-on-color' },
                                    mark : 'nb',
                                    content : [
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст. ',
                                        'Это параграф с меткой NB, в котором еще более бестолковый текст.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Списки'
                        },
                        {
                            block : 'row',
                            mix : [{ block: 'section', elem: 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3},
                                    content : [
                                        'Простой'
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 9},
                                    content : [
                                        'Нумерованный'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mix : [{ block: 'section', elem: 'examples' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'list',
                                            mods : { theme : 'alfa-on-color' },
                                            items : [
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 9 },
                                    content : [
                                        {
                                            block : 'list',
                                            mods : { type : 'ordered' },
                                            items : [
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка',
                                                'Пункт списка'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Кнопки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'examples' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', size: 's' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 's', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', view : 'pseudo', size: 's' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', size: 's', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 's' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 's' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa-on-color', size : 'xs', visible : true },
                                                        mix : { block : 'button', elem : 'icon' }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', size: 'm' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'm', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', view : 'pseudo', size: 'm' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', size: 'm', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'm' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'm' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa-on-color', size : 's', visible : true },
                                                        mix : { block : 'button', elem : 'icon' }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa-on-color', size: 'l' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'l', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', view : 'pseudo', size: 'l' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa-on-color', size: 'l', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'l' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'l' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa-on-color', size : 'm', visible : true },
                                                        mix : { block : 'button', elem : 'icon' }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa-on-color', size: 'xl' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'xl', view : 'action' },
                                                    text : 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: { theme: 'alfa-on-color', view : 'pseudo', size: 'xl' },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'alfa-on-color', size: 'xl', disabled : true },
                                                    text: 'button'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'xl' },
                                                    text : 'button',
                                                    icon : { block : 'icon', mods : { action : 'download' } }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mods : { theme: 'alfa-on-color', size : 'xl' },
                                                    icon : {
                                                        block : 'spin',
                                                        mods : { theme : 'alfa-on-color', size : 'l', visible : true },
                                                        mix : { block : 'button', elem : 'icon' }
                                                    },
                                                    text : 'Loading...'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Поля ввода'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 's' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 's', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 's', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa-on-color', size : 's' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa-on-color', size: 's' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 's', 'type' : 'link' },
                                                    val : null,
                                                    placeholder : 'Добавьте название'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 's', 'type' : 'symbol' },
                                                    val : 'Простой символ',
                                                    symbol : '₽'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 's', 'type' : 'result' },
                                                    val : 'Result'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'm' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'm', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'm', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa-on-color', size : 'm' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa-on-color', size: 'm' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'm', 'type' : 'link' },
                                                    val : 'Простой inplace'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'm', 'type' : 'symbol' },
                                                    val : 'Простой символ',
                                                    symbol : '₽'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'm', 'type' : 'result' },
                                                    val : 'Result'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'l' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'l', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'l', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa-on-color', size : 'l' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa-on-color', size: 'l' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'l', 'type' : 'link' },
                                                    val : 'Простой inplace'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'l', 'type' : 'symbol' },
                                                    val : 'Простой символ',
                                                    symbol : '₽'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'l', 'type' : 'result' },
                                                    val : 'Result'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'xl' },
                                                    val : 'Простой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', disabled : true },
                                                    val : 'Недоступный',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', 'has-clear' : true },
                                                    val : 'С очисткой',
                                                    placeholder : 'placeholder'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode : 'radio-check', theme : 'alfa-on-color', size : 'xl' },
                                                    name : 'select',
                                                    text : 'first',
                                                    options : [
                                                        { val : 1, text : 'first', checked: true },
                                                        { val : 2, text : 'second' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'textarea',
                                                    mods : { theme : 'alfa-on-color', size: 'xl' },
                                                    placeholder : 'текст'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'xl', 'type' : 'link' },
                                                    val : 'Простой inplace'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'xl', 'type' : 'symbol' },
                                                    val : 'Простой символ',
                                                    symbol : '₽'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mods : { theme : 'alfa-on-color', size: 'xl', 'type' : 'result' },
                                                    val : 'Result'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Радио'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa-on-color', size : 's', type : 'button' },
                                                    name : 'radio-sizes-s',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa-on-color', size : 'm', type : 'button' },
                                                    name : 'radio-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio',
                                                    mods : { theme : 'alfa-on-color', size : 'm', checked : true },
                                                    val : 1,
                                                    text : 'радио'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa-on-color', size : 'm' },
                                                    name : 'radio-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa-on-color', size : 'l', type : 'button' },
                                                    name : 'radio-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio',
                                                    mods : { theme : 'alfa-on-color', size : 'l', checked : true },
                                                    val : 1,
                                                    text : 'радио'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa-on-color', size : 'l' },
                                                    name : 'radio-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'radio-group',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', type : 'button' },
                                                    name : 'radio-sizes-xl',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Чекбоксы'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa-on-color', size : 's', type : 'button' },
                                                    name : 'checkbox-sizes-s',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa-on-color', size : 'm', type : 'button' },
                                                    name : 'checkbox-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox',
                                                    mods : { theme : 'alfa-on-color', size : 'm', checked : true },
                                                    val : 1,
                                                    text : 'чекбокс'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa-on-color', size : 'm' },
                                                    name : 'checkbox-sizes-m',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa-on-color', size : 'l', type : 'button' },
                                                    name : 'checkbox-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox',
                                                    mods : { theme : 'alfa-on-color', size : 'l', checked : true },
                                                    val : 1,
                                                    text : 'чекбокс'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa-on-color', size : 'l' },
                                                    name : 'checkbox-sizes-l',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'checkbox-group',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', type : 'button' },
                                                    name : 'checkbox-sizes-xl',
                                                    options : [
                                                        { val : 1, text : 'Один' },
                                                        { val : 2, text : 'Два', checked : true },
                                                        { val : 3, text : 'Три' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Выпадающие списки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'link', theme : 'alfa-on-color', size : 's', mode : 'hover' },
                                                    switcher : 'hover column dropdown',
                                                    popup : { block : 'popup', mods : { theme : 'alfa-on-color', view : 'column' }, content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', size : 's' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        mods : { theme : 'alfa-on-color' },
                                                        content : {
                                                            block : 'menu',
                                                            mods : { size : 's' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 's' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 's' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 's' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'link', theme : 'alfa-on-color', size : 's', mode : 'hover' },
                                                    switcher : 'hover column dropdown',
                                                    popup : { block : 'popup', mods : { theme : 'alfa-on-color', view : 'column' }, content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', size : 'm' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        content : {
                                                            block : 'menu',
                                                            mods : { size : 'm' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'm' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'm' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'm' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', size : 'l' },
                                                    switcher : 'dropdown',
                                                    popup : { block : 'popup', content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', size : 'l' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        content : {
                                                            block : 'menu',
                                                            mods : { size : 'l' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'l' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'l' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'l' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', size : 'xl' },
                                                    switcher : 'dropdown',
                                                    popup : { block : 'popup', content : 'popup' }
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'dropdown',
                                                    mods : { switcher : 'button', size : 'xl' },
                                                    switcher : 'dropdown',
                                                    popup : {
                                                        block : 'popup',
                                                        content : {
                                                            block : 'menu',
                                                            mods : { size : 'xl' },
                                                            content : [
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'xl' },
                                                                    content : 'Раз'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'xl' },
                                                                    content : 'Два'
                                                                },
                                                                {
                                                                    block : 'menu-item',
                                                                    mods : { size : 'xl' },
                                                                    content : 'Три'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Загрузчики'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa-on-color', size : 's', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa-on-color', size : 'm', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa-on-color', size : 'l', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'spin',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', visible : true }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Ссылки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 's' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 's', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 'm' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 'm', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 'l' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 'l', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 'xl' },
                                                    url : '#',
                                                    content : 'Ссылка'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'link',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', pseudo : true },
                                                    title : 'pseudo mod',
                                                    content : 'link'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Пример формы'
                        },
                        {
                            elem: 'examples',
                            content: [

                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Что-то еще'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                          block : 'link',
                          mods : { theme : 'alfa-on-color', size : 'xl', pseudo : true },
                          title : 'pseudo mod',
                          content : 'link'
                        }
                      ]
                    },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Пример формы'
                        },
                        {
                            elem: 'examples',
                            content: []
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Иконки'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { theme : 'alfa-on-color', size: 's', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { theme : 'alfa-on-color', size: 'm', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { theme : 'alfa-on-color', size: 'l', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'icon',
                                                    mods : { theme : 'alfa-on-color', size: 'xl', network : 'facebook' }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Меню'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-alfa', size : 's', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море1'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    mods: {theme: 'alfa', size: 's'},
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-color', size : 's', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море2'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    mods: {theme: 'alfa', size: 's'},
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-alfa', size : 'm', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    mods: {theme: 'alfa', size: 's'},
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-color', size : 'm', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    mods: {theme: 'alfa', size: 's'},
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-alfa', size : 'l', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    mods: {theme: 'alfa', size: 's'},
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            mods: {theme: 'alfa', size: 's'},
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-color', size : 'l', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : 'XL'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-alfa', size : 'xl', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 5 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'menu',
                                                    mods : { theme : 'alfa-on-color', size : 'xl', horizontal : true },
                                                    content : [
                                                        {
                                                            block : 'menu-item',
                                                            val : 1,
                                                            content : 'Море'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            val : 2,
                                                            content : 'Горы'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'link'},
                                                            val : 3,
                                                            url : '#',
                                                            content : 'Небо'
                                                        },
                                                        {
                                                            block : 'menu-item',
                                                            mods: {type: 'dropdown'},
                                                            val : 4,
                                                            content: 'Солнце',
                                                            popup : [
                                                                {
                                                                    block: 'menu',
                                                                    content: [
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Раз'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Два'
                                                                        },
                                                                        {
                                                                            block: 'menu-item',
                                                                            content: 'Три'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Что-то еще'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Плашка'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'plate',
                                                    mods : { theme : 'alfa-on-color' },
                                                    content : [
                                                        {
                                                            block : 'logo',
                                                            mods : { theme : 'alfa-on-white', view : 'full', size : 's' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'plate',
                                                    mods : { theme : 'alfa-on-color', 'has-clear' : true },
                                                    content : [
                                                        {
                                                            block : 'logo',
                                                            mods : { theme : 'alfa-on-white', view : 'full', size : 's' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            mix : [{ block : 'section', elem : 'title' }],
                            lvl : 2,
                            content : 'Уведомление'
                        },
                        {
                            block : 'row',
                            mix : [{ block : 'section', elem : 'sizes' }],
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'S'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'M'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'L'
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : 'XL'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            mix: [{ block: 'section', elem: 'examples' }],
                            content: [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'notification',
                                                    mods : { theme : 'alfa-on-color' },
                                                    message : 'Карта переименованна',
                                                    status : 'ok'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                                {
                                                    block : 'notification',
                                                    mods : { theme : 'alfa-on-color' },
                                                    message : 'Карта переименованна',
                                                    status : 'fail'
                                                }
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        },
                                        {
                                            block : 'controls',
                                            content : [
                                            ]
                                        }
                                    ]
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
                {
                    block : 'copyright',
                    mods : { theme : 'alfa-on-color' },
                    content : [
                        {
                            block : 'social-links',
                            mods : { theme : 'alfa-on-color', size : 's' },
                            links : [
                                { network : 'vk', url : 'https://vk.com/alfabank' },
                                { network : 'facebook', url : 'https://facebook.com/alfabank' },
                                { network : 'twitter', url : 'https://twitter.com/alfabank' }
                            ],
                            content : [
                                {
                                    block : 'link',
                                    mods : { theme: 'alfa-on-color', pseudo : true },
                                    url : '#',
                                    content : 'Мы в соцмедиа'
                                }
                            ]
                        },
                        {
                            block : 'paragraph',
                            content : 'Copyright @ ' + new Date().getFullYear() + ' Alfabank'
                        }
                    ]
                }
            ]
        }
    ]
})
