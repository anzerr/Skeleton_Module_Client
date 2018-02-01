var _App;
(function($) {
    "use strict";

    var info = {
        page: 'page'
    };
    var deus = new $._deus(info.page), r = deus.pub();
    $.util.style('base', r);

    r.create('app.page', {
        getInitialState: function() {
            return ({});
        },
		
        render: function() {
            return r('div').style('full', {padding: '1px 10px'}).c(
				'page'
            )
        }
    });

    $.page.add(info.page, {
        index: function() {
            ReactDOM.render(r('app.page').c(), document.getElementById('container'));
            return (true);
        }
    });
})(_App || (_App = {}));
