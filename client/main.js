import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(function(){
  $('.nav').on('click','li',function(){
    if(!$(this).hasClass('active')){
      $('.nav li').removeClass('active');
      $(this).addClass('active');
      $('#content li').hide();
      $('#content li').eq($('.nav li').index(this)).show();
    }
  })
})

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});



