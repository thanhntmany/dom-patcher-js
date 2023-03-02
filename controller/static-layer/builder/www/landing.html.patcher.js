'use strict';


module.exports = exports = function (dom, data, core) {

    dom.head.querySelector("title").innerText = data.title;

    core.replace(".login_face img", core('logo', data.logo));

    dom.body.querySelector(".card-body .row")
};
