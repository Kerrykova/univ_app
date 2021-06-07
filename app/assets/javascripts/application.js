// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//ordering matters

//= require rails-ujs
//= require jquery
//= require materialize

//= require turbolinks
//= require_tree .
//altered materialize code from ready to on so that it loads after turbolinks
//need to add jquery-rails to gem file

$(document).on('turbolinks:load', function() {
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('#fade-out-target').fadeOut(4000);
})