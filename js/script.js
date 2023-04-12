$(document).ready(function () {

    new lc_select('select[name="multiple"]', {
        wrap_width : '100%',
        enable_search : false,
        max_opts : 15,
    });


   $('select:not(.multiple-select)').niceSelect();
   $('.tasks__search-filter>input').click(function (event) {
      $(this).parent().next('.products-filter').addClass('active');
      $(this).parent().parent().parent().parent().parent().addClass('search');
   });
   $('.tasks__search>img').click(function (event) {
      $(this).next().next('.products-filter').toggleClass('active');
      $(this).parent().parent().parent().parent().toggleClass('search');
   });



   $('.products__content>p, .leads>p, .tasks>p, .contacts>p, .documents>p').click(function (event) {
      $(this).parent().find('.products-filter').removeClass('active');
      $(this).parent().removeClass('search');
   });
   $('.chat__actions .tasks__search-filter>input').click(function (event) {
      $('.deal__wrapper').addClass('search');
   });
   $('.chat__actions .tasks__search>img').click(function (event) {
      $('.deal__wrapper').toggleClass('search');
   });
   $('.deal__search>img').click(function (event) {
 
      $(this).parent().parent().toggleClass('thisshow');
      $(this).closest('.chat__container').find('.chat__person').toggleClass('width');

      
      if(!$(this).parent().parent().hasClass('thisshow')){
         $(this).parent().parent().find('.tasks__close').removeClass('close');
         $(this).parent().removeClass('hide');
         $(this).parents().eq(5).removeClass('search');
         $(this).parent().find('.products-filter').removeClass('active');

      }else{
         $('.tasks__search-filter input').trigger('keyup');
         $('.tasks__search-filter').trigger('DOMSubtreeModified');
         $(this).parents().eq(5).addClass('search');
         $(this).parent().find('.products-filter').addClass('active');
      }
 
      
   });
   $('.deal__body>p').click(function (event) {
      $('.deal__wrapper').find('.products-filter').removeClass('active');
      $('.deal__wrapper').removeClass('search');
      $(this).removeClass('showforcustomsel');
      $('#deal-sel-2').find('>div').removeClass('active');
      $(this).removeClass('showfordotssel');
      $('.deal .dots__select-menu').removeClass('active');
   });
   $('.tasks__search-filter').on('DOMSubtreeModified', function(){
         if($(this).find('.tasks__search-items').length >= 1){
            $(this).parent().addClass('hide');
         }else{
            $(this).parent().removeClass('hide');

         }
   });
   


   $('.tasks__close').click(function (event) {
      $(this).prev().find('.products-filter__reset').trigger('click');
      $(this).prev().prev().find('input').val('');
      $('.tasks__search-filter input').trigger('keyup');
   });
   $('.tasks__search-filter input').keyup(function (event) {
      if($(this).val().length>=1){
         $(this).parent().next().next().addClass('close');
      }else{
         $(this).parent().next().next().removeClass('close');
      }      
   });
   

   $('.products-filter input[type="text"]').keyup(function (event) {
      if($(this).val().length>=1){
         $(this).addClass('active');
      }else{
         $(this).removeClass('active');
      }
   });


   $('.products-filter input[type="text"]').keyup(function (event) {
      if($(this).val().length>=1){
         if($('.tasks__search-items').length >=1){
            $(this).parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).attr("placeholder")+'"]').parent().remove();
         }
         $('<div class="tasks__search-items"><p data-item="'+ $(this).attr("placeholder")+'">'+ $(this).attr("placeholder")+'</p><span>:  '+ $(this).val() +'</span><b></b></div>').insertAfter($(this).parent().parent().prev().find('>input'));                
      }else{
         if($('.tasks__search-items').length >=1){
            $(this).parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).attr("placeholder")+'"]').parent().remove();
         }
      }
   });
   $('.tasks__search').on('click', '.tasks__search-items b', function(e){
      $(this).parent().parent().next().find('>p>input[placeholder="'+ $(this).prev().prev().text()+'"]').next().trigger('click');
      $(this).parent().parent().next().find('.products-filter__date>span[data-filterdate="'+ $(this).prev().prev().text()+'"]').next().next().trigger('click');
      $(this).parent().parent().next().find('.nice-select .list li[data-value="'+ $(this).prev().prev().text()+'"]').parent().parent().next().trigger('click');
      $(this).parent().parent().next().find('.lcslt[data-placeh="'+$(this).prev().prev().text()+'"]').parent().next().trigger('click');
   });  

   $('.tasks__search').on('click', '.tasks__search-items p, .tasks__search-items span', function(e){
      $(this).parent().parent().find('>input').trigger('click');
   });  



   $('.products-filter>p>span').click(function (event) {
         $(this).prev().val('').removeClass('active');
         $(this).prev().trigger('keyup');
   });

   $('.nice-select .list li').click(function (event) {
      $(this).parent().parent().addClass('active');
         if($('.tasks__search-items').length >=1){
            $(this).parent().parent().parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).parent().find('.disabled').text()+'"]').parent().remove();
         }

      $('<div class="tasks__search-items"><p data-item="'+ $(this).parent().find('.disabled').text()+'">'+ $(this).parent().find('.disabled').text()+'</p><span>:  '+ $(this).text() +'</span><b></b></div>').insertAfter($(this).parent().parent().parent().parent().prev().find('>input'));
   });


   $('.lcslt').on('DOMSubtreeModified', function(){ 
      if($(this).find('.lcslt-multi-selected').length == 0){
         $(this).addClass('active').removeClass('show');
         $(this).parent().addClass('active').removeClass('show');
         $(this).parent().parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).attr("data-placeh")+'"]').parent().remove();
      }else{
         $(this).removeClass('active').addClass('show');
         $(this).parent().removeClass('active').addClass('show');

         if($('.tasks__search-items').length >=1){
            $(this).parent().parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).attr("data-placeh")+'"]').parent().remove();
         }
         if($(this).find('.lcslt-multi-selected>span').length >1){
            $('<div class="tasks__search-items"><p data-item="'+ $(this).attr("data-placeh")+'">'+ $(this).attr("data-placeh")+'</p><span>:  '+ $(this).find('.lcslt-multi-selected>span').length +'</span><b></b></div>').insertAfter($(this).parent().parent().parent().prev().find('>input'));
         }else{
            $('<div class="tasks__search-items"><p data-item="'+ $(this).attr("data-placeh")+'">'+ $(this).attr("data-placeh")+'</p><span>:  '+ $(this).find('.lcslt-multi-selected>span').text() +'</span><b></b></div>').insertAfter($(this).parent().parent().parent().prev().find('>input'));
         }
      }
   });

   $('.products-filter input[type="date"]').change(function (event) {
      $(this).parent().addClass('active');
   });
   $('.products-filter__date b').click(function (event) {
         $(this).prev().val('').parent().removeClass('active');
         $(this).parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).prev().prev().text()+'"]').parent().remove();
   });
   $('.products-filter__date>input').change(function (event) {
         if($('.tasks__search-items').length >=1){
            $(this).parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).prev().text()+'"]').parent().remove();
         }
         $('<div class="tasks__search-items"><p data-item="'+ $(this).prev().text()+'">'+ $(this).prev().text()+'</p><span>:  '+ $(this).val() +'</span><b></b></div>').insertAfter($(this).parent().parent().prev().find('>input'));                
   });


   $('.products-filter__select b').click(function (event) {
         $(this).prev().removeClass('active');
         $(this).prev().find('.list .option').removeClass('selected');
         $(this).prev().find('.list .option.disabled').addClass('selected');
         var currentseltext = $(this).prev().find('.list .option.disabled').text();
         $(this).prev().find('.current').text(currentseltext);

         $(this).prev('.lcslt-wrap').removeClass('show');
         $(this).prev('.lcslt-wrap').find('.lcslt-multi-selected').trigger('click');
         $(this).parent().parent().prev().find('.tasks__search-items>p[data-item="'+ $(this).prev().find('.disabled').text()+'"]').parent().remove();
   });


   $('.products-filter').click(function (event) {
      if($('.nice-select').hasClass('active') || $('.products-filter__date').hasClass('active') || $('.products-filter input').hasClass('active') || $('.lcslt').hasClass('show')){
         $('.products-filter__bottom').addClass('active');
      }else{
         $('.products-filter__bottom').removeClass('active');
      }
   });



   $('.products-filter__reset').click(function (event) {
      $(this).parent().parent().prev().find('input').val('');
      $('.products-filter__select b').trigger('click');
      $('.products-filter__date b').trigger('click');
      $('.products-filter>p>span').trigger('click');
      $('.tasks__search-filter input').trigger('keyup');
      // $(this).parent().parent().find('span').prev().val('').removeClass('active');

   });

   $('.message__search input').keyup(function (event) {
      if($(this).val().length>0){
         $(this).next().addClass('active');
      }else{
         $(this).next().removeClass('active');
      }
   });
   $('.message__search b').click(function (event) {
      $(this).prev().val('');
   });

   $('.content__item').click(function (event) {
      $('.content__body>div').removeClass('active');
      $('.'+$(this).attr('data-content')+'').toggleClass('active');
       $('.content').toggleClass('lock');
   });   
   $('.products__new-lead').click(function (event) {
      event.preventDefault();
       $('.form-popup').removeClass('open');
       $('#'+$(this).attr('data-popup')+'').addClass('open');
       $('body').addClass('lock');
   }); 
   
   $('.form-popup__close1').click(function (event) {
       $('.form-popup').removeClass('open');
       $('body').removeClass('lock');
   });  
   $('.form-popup__close').click(function (event) {
      event.preventDefault();
      $(this).parents().eq(2).find('input').val('');
      $(this).parents().eq(2).find('.option').removeClass('selected');
      $(this).parents().eq(2).find('.option.disabled').addClass('selected');
      $(this).parents().eq(2).find('.current').html('...');
      $(this).parents().eq(2).find('input').trigger('keyup');
      $(this).parents().eq(2).find('.form__list-adnewlist>b').trigger('click');
      $('.form-popup').removeClass('open');
      $('body').removeClass('lock');  
  
   });  
   $('.leads__funnel').click(function (event) {
       $('.funnel').addClass('open');
       $('body').addClass('lock');
   });  
   $('.funnel__back').click(function (event) {
       $('.funnel').removeClass('open');
       $('body').removeClass('lock');
   });  
   $('.funnel__body').on('click', '.funnel__top-actions>img', function(e){
       $(this).parent().parent().parent().remove();
   });  
   
        var dragSrcEl = null;
        function handleDragStart(e) {
          this.style.opacity = '0.4';
          dragSrcEl = this;
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.innerHTML);
        }
        function handleDragOver(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }

          e.dataTransfer.dropEffect = 'move';
          return false;
        }

        function handleDragEnter(e) {
          this.classList.add('over');
        }

        function handleDragLeave(e) {
          this.classList.remove('over');
        }

        function handleDrop(e) {
          if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
          }
          
          if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
          }
          $(".colorPickSelector").colorPick({ 'allowRecent': false, 'paletteLabel': '', 'initialColor': "$(this).parent().parent().css('border-color')" }); 
            $('.colorPickSelector').on('DOMSubtreeModified', function() {
               $(this).parent().parent().css('border-color', $(this).css("color"));
               //$(this).css('background-color', $(this).css('color'));
            });   
          return false;
        }

        function handleDragEnd(e) {
          this.style.opacity = '1';
          var items = document.querySelectorAll('.funnel__column');
          items.forEach(function (item) {
            item.classList.remove('over');
          });
        }  
        function grabfunnel() {
         var items = document.querySelectorAll('.funnel__column');
           items.forEach(function(item) {
             item.addEventListener('dragstart', handleDragStart, false);
             item.addEventListener('dragenter', handleDragEnter, false);
             item.addEventListener('dragover', handleDragOver, false);
             item.addEventListener('dragleave', handleDragLeave, false);
             item.addEventListener('drop', handleDrop, false);
             item.addEventListener('dragend', handleDragEnd, false);
           });
        }
        grabfunnel();
   
        function handleDragEnd1(e) {
          this.style.opacity = '1';
          var items = document.querySelectorAll('.settings__leadrow');
          items.forEach(function (item) {
            item.classList.remove('over');
          });
        }  
        function grabfunnel1() {
         var items = document.querySelectorAll('.settings__leadrow');
           items.forEach(function(item) {
             item.addEventListener('dragstart', handleDragStart, false);
             item.addEventListener('dragenter', handleDragEnter, false);
             item.addEventListener('dragover', handleDragOver, false);
             item.addEventListener('dragleave', handleDragLeave, false);
             item.addEventListener('drop', handleDrop, false);
             item.addEventListener('dragend', handleDragEnd, false);
           });
        }   
        grabfunnel1();



   $('.funnel__body').on('click', '.funnel__top>svg', function(e){
      $('<div draggable="true" class="funnel__column"> <div class="funnel__top"><img src="img/home/grip-vertical-solid.svg" alt=""> <input type="text" value=""> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> <div class="funnel__top-actions"> <img src="img/home/trash.svg" alt=""> <div class="colorPickSelector"></div> </div> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> <div class="funnel__card"> <p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Добавить триггер </p> </div> </div>').insertAfter($(this).parent().parent());
      $(this).parent().parent().next().find('.funnel__top>input').focus();
      $(".colorPickSelector").colorPick({ 'allowRecent': false, 'paletteLabel': '', 'initialColor': "$(this).parent().parent().css('border-color')" });
      $('.colorPickSelector').on('DOMSubtreeModified', function() {
         $(this).parent().parent().css('border-color', $(this).css("color"));
      });   
      grabfunnel();
   });  
   $(".colorPickSelector").colorPick({ 'allowRecent': false, 'paletteLabel': '', 'initialColor': '#3bb051' });
   $('.colorPickSelector').on('DOMSubtreeModified', function() {
      $(this).parent().parent().css('border-color', $(this).css("color"));
   });   
   $('.funnel').on('keyup', '.funnel__top input', function(e){
      $(this).attr('value', $(this).val());
      $('.funnel__save').prop('disabled', false);
   });

   $('.funnel__title').click(function (event) {
       $(this).parent().prev().addClass('open');
       $(this).parent().parent().find('.funnel__menu').addClass('open');
   });     
   $('.funnel>p').click(function (event) {
         $(this).removeClass('open');
       $(this).parent().find('.funnel__menu').removeClass('open');
   });     
   $('.funnel').on('click','.funnel__card>p', function() {
      $('.funnel-trigger').addClass('open');
   });     
   $('.funnel-trigger>p').click(function (event) {
      $('.funnel-trigger').removeClass('open');
   });   
   $('.funnel__add').click(function (event) {
      $(this).parent().removeClass('open');
      $(this).parent().parent().find('>p').removeClass('open');
      $('.funnel__column:last-child .funnel__top>svg').trigger('click');
   });   
   $('.content__hide').click(function (event) {
       $('.content').toggleClass('hide');
   });  


   $('.tab-stock').click(function (event) {
      $('.products__content-1').addClass('active');
      $('.products__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   });   
   $('.tab-products1').click(function (event) {
      $('.products__content-2').addClass('active');
      $('.products__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   });   
   $('.tab-shipment').click(function (event) {
      $('.products__content-3').addClass('active');
      $('.products__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   });   
   $('.tab-suppliers').click(function (event) {
      $('.products__content-4').addClass('active');
      $('.products__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   });  
   $('.tab-guarantee').click(function (event) {
      $('.products__content-5').addClass('active');
      $('.products__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   });  
   $('.tab-stats').click(function (event) {
      $('.products__content-6').addClass('active');
      $('.products__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   }); 


   $('.settings__item').click(function (event) {  
      var settings =  $(this).attr('data-nav');   
      $('.'+settings+'').addClass('active');
      $('.settings__nav').addClass('hideproduct');
      $('.content').toggleClass('lock');
   });   

   $('.settings__row input').keyup(function (event) {  
      let inputs = $('.settings__content input'), some;
       some = '';
       inputs.each(function() {
           some += $(this).val();
       });
       if(!some){
           $(this).parent().parent().find('.settings__bottom').removeClass('show');
       }
       else{
          $(this).parent().parent().find('.settings__bottom').addClass('show');
       }
   });   


   $('.content__item').click(function (event) {
      $('.products__nav, .settings__nav').removeClass('hideproduct');
      $('.products__content, .settings__content').removeClass('active');
   });   
   $('.leads__more').click(function (event) {
      $(this).find('.leads__nav').toggleClass('active');
   });
   $('.tasks__more').click(function (event) {
      $(this).find('.tasks__nav').toggleClass('active');
   });
   $('.deal__tab').click(function (event) {
     $('.deal__tab').removeClass('active');
      $(this).addClass('active');
   });
   $('.deal__tab-1').click(function (event) {
      $('.deal__tab-body').removeClass('target');
     $('#tab_01').addClass('target');
     $('.deal__tabs').scrollLeft(0);
   });
   $('.deal__tab-2').click(function (event) {
     $('.deal__tab-body').removeClass('target');
      $('#tab_02').addClass('target');;
   });
   $('.deal__tab-3').click(function (event) {
     $('.deal__tab-body').removeClass('target');
      $('#tab_03').addClass('target');
      $('.deal__tabs').scrollLeft($(this).offset().left);
   });
   $('.deal__content').on('click', '.deal__addtel b', function(e){
      $('<div class="deal__row deal__addtel"><span>Телефон <b></b><em class="active"></em></span><input type="tel" value="" placeholder="..."></div>').insertAfter( ".deal__addtel:last-child");   
   });  
  $('.deal__content').on('click', '.deal__addmail b', function(e){
      $('<div class="deal__row deal__addmail"><span>Почта<b></b><em class="active"></em></span><input type="email" value="" placeholder="..."></div>').insertAfter( ".deal__addmail:last-child");   
   });   
   $('.chat__info').on('DOMSubtreeModified', function(){
      $(this).parents().eq(3).next().find(".deal__content-wrapbtns").addClass('active');
      $(this).parents().eq(3).next().find(".deal__content-wrapbtns").css('width',$(this).parents().eq(3).next().width());
   });
   $('.chat__name').on('keyup', function(){
      $(this).parent().trigger('DOMSubtreeModified');
   });
    $('.deal__content').on('change', '.deal__row', function(e){
      $(this).closest( ".deal__content" ).find(".deal__content-wrapbtns").addClass('active');
      $(this).closest( ".deal__content" ).find(".deal__content-wrapbtns").css('width',$(this).closest( ".deal__content" ).width());
   });
   $('.deal__content').on('DOMSubtreeModified', '.deal__input', function(e){
      $(this).closest( ".deal__content" ).find(".deal__content-wrapbtns").addClass('active');
      $(this).closest( ".deal__content" ).find(".deal__content-wrapbtns").css('width',$(this).closest( ".deal__content" ).width());
   });
   
   $('.deal__addcontact').click(function (event) {
      $('<div class="deal__list"><div class="deal__row deal__row-name"><span>Контакт</span><input type="text" placeholder="..."></div><div class="deal__wrapp"><div class="deal__row deal__newtel"><span>Телефон<b></b><em></em></span><input type="text" placeholder="..."></div></div><div class="deal__wrapp"><div class="deal__row deal__newmail"><span>Почта<b></b><em></em></span><input type="email" placeholder="..."></div></div><div class="deal__row"><span>Должность </span><input type="text" placeholder="..."></div><a class="deal__newback" href="#">отмена</a></div>').insertBefore( ".deal__contactlist");
   });

   $('.deal__addcompany').click(function (event) {
       $('<div class="deal__list"><div class="deal__row deal__row-name"><span>Компания</span><input type="text" placeholder="..."></div><div class="deal__wrapp1"><div class="deal__row deal__newtel1"><span>Телефон<b></b></span><input type="text" placeholder="..."></div></div><div class="deal__wrapp1"><div class="deal__row deal__newmail1"><span>Почта<b></b></span><input type="email" placeholder="..."></div></div><div class="deal__row deal__newcompany"><span>ОГРН </span><input type="text" placeholder="..."></div><div class="deal__row deal__newcompany"><span>ИНН </span><input type="text" placeholder="..."></div><div class="deal__row deal__newcompany"><span>КПП </span><input type="text" placeholder="..."></div><div class="deal__row deal__newcompany"><span>Юр. адрес </span><input type="text" placeholder="..."></div><div class="deal__row deal__newcompany"><span>Почт. адрес </span><input type="text" placeholder="..."></div><a class="deal__newback1" href="#">отмена</a></div>').insertBefore( ".deal__companylist");
   });
   $('.deal__content').on('click', '.deal__row-adnewproduct b:not(.minus)', function(e){
      var addnewproductlenght = $('.deal__adnewproduct').length;
      var addnewproduct2 = $(this).parent().parent().parent().find('.deal__adnewproduct')[addnewproductlenght - 1];
      $('<div class="deal__row deal__row-adnewproduct"><span>Товар <b class="minus"></b> </span><div class="deal__custom-select deal__custom-select-product"><span>...</span><div class="deal__select-menu"><p>Влагомеры </p><p>Аэраторы зерна</p><p>Агронавигаторы</p></div></div></div><div class="deal__adnewproduct"></div>').insertAfter(addnewproduct2);
   });  



   $('body').on('keyup', '.deal__row-delivery input', function(e){
      if ($(this).val().length) {
         $(this).parent().find('b').addClass('active');
      }else{
         $(this).parent().find('b').removeClass('active');
      }
   });
   $('.deal__content').on('click', '.deal__row b.minus', function(e){
      $(this).parent().parent().nextUntil( ".deal__adnewproduct" ).remove();
      $(this).parent().parent().remove();         
   });  


   $('.deal__content').on('click', '.deal__row-delivery b', function(e){
      var addeliverylenght = $('.deal__adnewproduct').length;
      var addeliverylenght2 = $(this).parent().parent().parent().find('.deal__addelivery')[addeliverylenght - 1];
      $('<div class="deal__row deal__row-delivery1"><span>Трек номер</span><input type="text" placeholder="..."></div><div class="deal__row"><span>Товар</span><div class="deal__custom-select"><span>...</span><div class="deal__select-menu"><p>Весь заказ одним местом</p><p>Агронавигаторы</p><p>Влагомер зерна</p></div></div></div><div class="deal__row"><span>Способ доставки</span><div class="deal__custom-select"><span>...</span><div class="deal__select-menu"><p>СДЭК</p><p>ДЕЛОВЫЕ ЛИНИИ</p><p>БАЙКАЛ</p><p>ПЭК</p></div></div></div><div class="deal__row"><span>Тип доставки</span><div class="deal__custom-select"><span>...</span><div class="deal__select-menu"><p>СКЛАД-СКЛАД</p><p>ДВЕРЬ-СКЛАД</p><p>СКЛАД-ДВЕРЬ</p><p>ДВЕРЬ-ДВЕРЬ</p></div></div></div><div class="deal__row"><span>Стоимость <br> доставки</span><input type="text" placeholder="..."></div>').insertBefore(addeliverylenght2);
   });   
 



    $('.deal__newtel input').each(function (event) {
      var newtellen = $(this).val().length;
      if(newtellen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });      
    $('.deal__newmail input').each(function (event) {
      var newmaillen = $(this).val().length;
      if(newmaillen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   }); 
    $('.deal__content').on('click', '.deal__newtel b', function(e){
      $('<div class="deal__row deal__newtel"><span>Телефон<b></b><em class="active"></em></span><input type="text" placeholder="..."></div> ').insertAfter( ".deal__newtel:last-child");
    });

   $('.deal__content').on('click', '.deal__newmail b', function(e){
      $('<div class="deal__row deal__newmail"><span>Почта<b></b><em class="active"></em></span><input type="email" placeholder="..."></div> ').insertAfter( ".deal__newmail:last-child"); 
   });
   $('.deal__content').on('click', '.deal__newtel1 b', function(e){
      $('<div class="deal__row deal__newtel1"><span> Телефон<b></b><em class="active"></em></span><input type="tel" value="" placeholder="..."></div>').insertAfter( ".deal__newtel1:last-child");         
   });
   $('.deal__content').on('click', '.deal__newmail1 b', function(e){
      $('<div class="deal__row deal__newmail1"><span>Почта<b></b><em class="active"></em></span><input type="mail" value="" placeholder="..."></div>').insertAfter( ".deal__newmail1:last-child");         
   }); 

    $('.deal__newtel1 input').each(function (event) {
      var newtellen = $(this).val().length;
      if(newtellen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });      
    $('.deal__newmail1 input').each(function (event) {
      var newmaillen = $(this).val().length;
      if(newmaillen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   }); 
   $('.deal__content').on('click', '.deal__row-phone>span>b', function(e){ 
      $('<div class="deal__row deal__row-phone"><span>Телефон<b></b><em class="active"></em></span><input type="tel" value="" placeholder="..."></div>').insertAfter( ".deal__row-phone:last-child");   
   });
   $('.deal__content').on('click', '.deal__row-mail>span>b', function(e){ 
       $('<div class="deal__row deal__row-mail"><span>Почта<b></b><em class="active"></em></span><input type="email" value="" placeholder="..."></div>').insertAfter( ".deal__row-mail:last-child");   
   });
    $('.deal__row-phone input').each(function (event) {
      var dealrowphone = $(this).val().length;
      if(dealrowphone > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });      
    $('.deal__row-mail input').each(function (event) {
      var dealrowmail = $(this).val().length;
      if(dealrowmail > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   }); 



   $('.message__people').click(function (event) {
       $(this).toggleClass('active');
       $('.message__context-menu').removeClass('active');
       $('.message__people').not(this).removeClass('active');
       $('.message__deal').removeClass('active');
       $('.deal').removeClass('active');
       $('.chat').addClass('active');     
       $('.chat__body').each(function (event) {
         var chat = $(this).width();
         if(chat<660){
            $(this).find('.chat__me, .chat__he').css('max-width','100%');
         }else{
            $(this).find('.chat__me, .chat__he').css('max-width','100%');
         }
      });        
   });
   $('.message__deal').click(function (event) {
       $(this).toggleClass('active');
       $('.message__context-menu').removeClass('active');
       $('.message__people').removeClass('active');
       $('.chat').removeClass('active');
       $('.deal').addClass('active');
         $('.chat__body').each(function (event) {
            var chat = $(this).width();
            if(chat<660){
               $(this).find('.chat__me, .chat__he').css('max-width','100%');
            }else{
               $(this).find('.chat__me, .chat__he').css('max-width','100%');
            }
         }); 
         // var content = $('.deal__content').width();
         // $('.deal__content').css('min-width',content);      
   });
   $('.message__people, .message__deal').contextmenu(function (event) {
      event.preventDefault();
      let x = event.offsetX, y = event.offsetY;
      $('.message__context-menu').removeClass('active');
      $(this).find('.message__context-menu').toggleClass('active');
      $(this).find('.message__context-menu').css('top', y + $(this).offset().top);
      $(this).find('.message__context-menu').css('left', x);
      $('.message__people:last-child').find('.message__context-menu').css('top', y + $(this).offset().top - 60);
   });
   $('.chat').click(function (event) {
      $('.message__context-menu').removeClass('active');
   });
   $('.deal__tab').click(function (event){
      $('.deal__tab').removeClass('active');
       $(this).addClass('active');
   });
   $('.deal__input').click(function (event){
      if(!$('.deal__input input').is(':focus') && !$(".deal__input>img").is(event.target)){
         $('.deal__input .deal__submenu').toggleClass('active');
      }else{
         $('.deal__input .deal__submenu').removeClass('active');
      }
   });
   $('.deal__input .deal__edit').click(function (event){
      $('.deal__input input').removeAttr('disabled').focus();
   });
   $('.deal__input input').blur(function (event){
      $('.deal__input input').prop('disabled','disabled');
   });
   $('.deal__subitem[data-action]').click(function (event){
      $('#'+$(this).attr('data-action')+'').addClass('show');
   });
   $('.deal__input>img').click(function (event){
      $(this).removeClass('show');
   });
   $('#tab_01 .deal__custom-select span').click(function (event){
      $(this).parent().find('.deal__select-menu').toggleClass('active');
   });
   $('#tab_01 .deal__select-menu p').click(function (event){
      var selmenu = $(this).text()
     $(this).parent().parent().find('span').text(selmenu);
     $(this).parent().removeClass('active');
   });


   $('#deal-sel-2 span').click(function (event){
      $(this).parent().find('.deal__select-menu').toggleClass('active');
      $(this).parents().eq(4).next('.deal__body').find('>p').toggleClass('showforcustomsel').removeClass('showfordotssel');
      $('.deal .dots__select-menu').removeClass('active');

   });
   $('#deal-sel-2 p').click(function (event){
      var selmenu = $(this).text()
     $(this).parent().parent().find('span').text(selmenu);
     $(this).parent().removeClass('active');
     $('.deal__body>p').removeClass('showforcustomsel');
   });



   

   $('.chat__actions svg').click(function (event){
      $('.deal .dots__select-menu').toggleClass('active');
      $(this).parents().eq(2).next('.deal__body').find('>p').toggleClass('showfordotssel').removeClass('showforcustomsel');
      $('#deal-sel-2').find('>div').removeClass('active');

   });
   $('.chat__close').click(function (event){
      $(this).parents().eq(4).removeClass('active');
   });
   $('.message__close').click(function (event){
      $(this).parents().eq(2).removeClass('active');
   });





   $('.form-popup').on('click', '.form__row-adnewproduct .list li', function(e){
     $(this).parent().parent().parent().find('>span>b').addClass('active');
   });
   $('.form-popup').on('click', '.form__row-adnewproduct>span>b', function(e){ 
      var formnewproductlenght = $(this).parents().eq(3).find('.form__list').length;
      var formnewproduct = $(this).parents().eq(3).find('.form__list')[formnewproductlenght - 1];
      $('<div class="form__list"><div class="form__row form__row-adnewproduct"><span>Товар <b></b> </span><select name="" id=""><option value="" disabled selected>...</option><option value="">Агронавигатор Agroglobal AGN8000</option><option value="">Агронавигатор Agroglobal AT5</option><option value="">Агронавигатор Agroglobal AT5 RTK</option><option value="">Агронавигатор Кампус</option></select></div><div class="form__row"><span>Цена</span><input type="text" placeholder="..."></div><div class="form__row"><span>Количество</span><input type="text" placeholder="..."></div></div>').insertAfter(formnewproduct);   
      $('select').niceSelect();
   });
   $('.form-popup').on('keyup', '.form__row-adnewrow:last-child input', function(e){
      if($(this).val().length > 0){
         $(this).parent().find('>span>b').addClass('active');
      }else{
         $(this).parent().find('>span>b').removeClass('active');
      }
    });
    $('.form-popup').on('click', '.form__row-adnewrow>span>b', function(e){ 
      var formnewrow = $(this).parent().parent().parent().find('.form__row-adnewrow:last-child');
      $('<div class="form__row form__row-adnewrow"><span>Юр. лицо  <b></b> </span><input type="text" placeholder="..."></div>').insertAfter(formnewrow);   
   });
   $('.form-popup').on('keyup', '.form__list-adnewlist .form__row input', function(e){
      if($(this).val().length > 0){
         $(this).parent().find('>span>b').addClass('active');
      }else{
         $(this).parent().find('>span>b').removeClass('active');
      }
    });

    $('.form-popup').on('click', '.form__list-adnewlist .form__row>span>b', function(e){ 
      var formnewlistlength = $(this).parents().eq(3).find('.form__list-adnewlist').length;
      var formnewlist = $(this).parents().eq(3).find('.form__list-adnewlist')[formnewlistlength - 1];
      $('<div class="form__list form__list-adnewlist"><div class="form__row form__row-adnewrow"><span>Контактное лицо <b></b> </span><input type="text" placeholder="..."></div><div class="form__row"><span>Должность</span><input type="text" placeholder="..."></div><div class="form__row"><span>Почта </span><input type="text" placeholder="..."></div><div class="form__row"><span>Телефон</span><input type="text" placeholder="..."></div><b>Отмена</b></div>').insertAfter(formnewlist);   
   });
   $('.form-popup').on('click', '.form__list-adnewlist>b', function(e){ 
      $(this).parent().remove();
   });
   $('body').on('click', '.deal__row-bonus .deal__select-menu', function(e){
      $('.deal__row-bonus:first-child').find('b').addClass('active');
   });
   $('body').on('click', '.deal__row-bonus b', function(e){
       var dealbonus = $('.deal__row-bonus').length;
       var dealbonus2 = $(this).parent().parent().parent().find('.deal__row-bonus')[dealbonus - 1];
       $('<div class="deal__row deal__row-bonus"><span>Бонус <b></b> </span><div class="deal__custom-select"><span>...</span><div class="deal__select-menu"><p>Влагомер</p><p>Агронавигаторы</p><p>Анемометр</p><p>Доп. гарантия</p><p>Кешбек 2000₽</p><p>Кешбек 3000₽</p><p>Кешбек 4000₽</p></div></div></div>').insertAfter(dealbonus2);
   });
   $('.deal__mail').click(function (event){
      if(!$('.deal__mail input').is(':focus')){
         $('.deal__mail .deal__submenu1').toggleClass('active');
      }else{
         $('.deal__mail .deal__submenu1').removeClass('active');
      }
   });
   $('.deal__mail .deal__edit').click(function (event){
      $('.deal__mail input').removeAttr('disabled').focus();
   });   
   $('.deal__mail input').blur(function (event){
      $('.deal__mail input').prop('disabled','disabled');
   });   
   $('.sms-deal span').click(function (event){
      $('.sms-deal__sublist').toggleClass('active');
   });
   $('.sms-deal__sublist p').click(function (event){
      var smsdealsub = $(this).text();
      if(smsdealsub == "Задача" && $('.sms-deal span').text() != "Задача"){
         
         $('.sms-deal span').text('');
         $('.sms-deal span').html('Задача')
         $('<p>на <input type="date" value="2022-01-01"></p>').insertAfter('.sms-deal>span');
         $('#deal__sms').attr("placeholder", "Опишите задачу");
         $('.deal__sms-wrap>span, .who-deal').show();
         $('.sms-deal__select').addClass('active');
      }
      else if(smsdealsub == "Примечание"){
         $('.sms-deal span').text('');
         $('.sms-deal span').html('Примечание:')
         $('#deal__sms').attr("placeholder", "Введите текст");
         $('.deal__sms-wrap>span, .who-deal, .sms-deal>p').hide();
         $('.sms-deal__select').removeClass('active');
      }
      else if(smsdealsub == "Сообщение"){
         $('.sms-deal span').text('');
         $('.sms-deal span').html('Сообщение');
         $('#deal__sms').attr("placeholder", "Введите сообщение");
         $('.deal__sms-wrap>span, .who-deal').show();
         $('.sms-deal>p').hide();
         $('.sms-deal__select').removeClass('active');
      }
      else if(smsdealsub == "Создать документ"){
         $(this).parents().eq(4).prev().find('.chat__scroll').append('<div class="order creature paid-for-other*"><p>Заполните все необходимые данные для формирования документа</p><div><div class="creature__row">Тип документа: <select><option value="..." disabled selected>...</option><option value="">Счёт</option><option value="">Счёт-договор</option><option value="">Договор и счёт</option></select></div><div class="creature__row">Дата документа: <input type="date"></div></div><div><div class="creature__row">Поставщик:<select><option value="..." disabled selected>...</option><option value="">ИП Шрамков Виктор Николаевич</option><option value="">ООО Валента</option></select></div><div class="creature__row">Покупатель:<select><option value="..." disabled selected>...</option><option value="">ИП Иванов Иван Иванович</option></select></div></div><div><div class="creature__row">Форма оплаты:<select><option value="..." disabled selected>...</option><option value="">Частичная предоплата</option><option value="">100% предоплата</option><option value="">Без предоплаты</option></select></div><div class="creature__row creature__row-other">Сумма предоплаты:<input type="text" placeholder="..."></div><div class="creature__row">Способ оплаты:<select><option value="..." disabled selected>...</option><option value="">На расчётный счёт</option><option value="">На карту банка</option><option value="">В офисе ТК</option><option value="">Смешанно</option></select></div><div class="creature__row">Доставка за счёт:<select><option value="..." disabled selected>...</option><option value="">Поставщика (нас)</option><option value="">Покупателя</option></select></div><div class="creature__row">Гарантия:<select><option value="..." disabled selected>...</option><option value="">1 год</option><option value="">2 года</option><option value="">3 года</option><option value="">4 года</option><option value="">5 лет</option><option value="">6 месяцев</option><option value="">12 месяцев</option><option value="">24 месяца</option><option value="">36 месяцев</option></select></div></div><div><div class="creature__row">Бонус:<select><option value="..." disabled selected>...</option><option value="">Анемометр</option><option value="">Видео камера</option><option value="">Влагомер зерна</option><option value="">Анализатор почвы</option><option value="">Расширенная гарантия</option><option value="">Бесплатная доставка</option></select></div><div class="creature__row">Источник заказа:<select><option value="..." disabled selected>...</option><option value="">Основной сайт+директ</option><option value="">Сайт с.в.п. + директ</option><option value="">Сайт подбор+директ</option></select></div><div class="creature__row">Примечание:<input type="text" placeholder="..."></div></div><div class="score-tab"> <table><thead><tr><th>№</th><th>Наименование товара или услуги</th><th>Кол.</th><th>Цена</th><th>Сумма</th></tr></thead><tbody><tr><td>1</td><td><input class="products-datalist" type="text" data-list="datalist" placeholder="..."><datalist id="datalist"><option value="Агронавигатор Agroglobal AGN8000"><option value="Агронавигатор Кампус (модель 5)"></datalist></td><td><input class="product-count" type="number" placeholder="..."></td><td><input class="product-cost" type="number" placeholder="..."></td><td><input disabled class="product-sum" type="number" placeholder="..."></td></tr><tr><td></td><td></td><td></td><td>Итого</td><td><input disabled class="product-total" type="number" placeholder="..."></td></tr></tbody></table></div><div class="paid-for__btns"> <a href="#" class="order__bottom score-tab-addtablerow">+ ПОЗИЦИЯ</a> <a href="#" class="order__bottom">СОХРАНИТЬ</a> <a href="#" class="order__bottom">ОТМЕНИТЬ</a> </div><p><span></span> </p></div>');
         $('select:not(.multiple-select)').niceSelect();
         $('.sms-deal__select').removeClass('active');
      }      
     $('.sms-deal__sublist').removeClass('active');
   });   
   

   $('body').on('click', '.creature__row ul li', function(e){
      if($(this).text() == 'Частичная предоплата'){
        $(this).parents().eq(2).next().addClass('showthis');
      }else{
         $(this).parents().eq(2).next().removeClass('showthis');
      }
   });   
   
   $('.who-deal span').click(function (event){
      $('.who-deal__sublist').toggleClass('active');
   });   
   $('.who-deal__sublist p').click(function (event){
      var whodealsub = $(this).text()
     $('.who-deal span').text(whodealsub);
     $('.who-deal__sublist').removeClass('active');
   });
   $('.task_expectation, .task_overdue').click(function (event){
      if($(event.target).parents().hasClass('task__result')){
         $(this).addClass('active');
      }
      else{
      $(this).toggleClass('active');
     }
         
   });
   $(".task__result input").keyup(function(event) {
      var taskresult = $(this).val();
       if(taskresult.length > 3 && $(this).parent().next().find("input[type='checkbox']").is(':checked') && $(this).parent().next().find("input[type='date']").hasClass('changed') ){
          $(this).next().removeAttr("disabled");
       }else{
         $(this).next().attr('disabled', 'disabled');
     }
   });
   $(".task__result-moreinfo input[type='date']").change(function(event) {
      $(this).addClass('changed');
      $(this).parent().find("input[type='checkbox']").prop('checked', true);
      $(this).parent().prev().find('button').removeAttr("disabled");
   });

    const blockId = '#leads';
    new ScrollBooster({
        viewport: $('.leads')[0],
        content:  $('.leads')[0],
        scrollMode: 'native',
        pointerMode: 'mouse',
        bounce: false,
        onPointerDown: function() { $(blockId + ' *:focus').blur() }
    });
    const blockIdtasks = '#tasks';
    new ScrollBooster({
        viewport: $('.tasks')[0],
        content:  $('.tasks')[0],
        scrollMode: 'native',
        pointerMode: 'mouse',
        bounce: false,
        onPointerDown: function() { $(blockIdtasks + ' *:focus').blur() }
    });
   const blockIdfnl = '#funnel';
    new ScrollBooster({
        viewport: $('.funnel__content')[0],
        content:  $('.funnel__content')[0],
        scrollMode: 'native',
        pointerMode: 'mouse',
        bounce: false,
        onPointerDown: function() { $(blockIdfnl + ' *:focus').blur() }
    });

   $("table th input").on('change', function() {
      if($(this).is(':checked')){
      $(this).parent().parent().parent().next().find('input').prop( 'checked', true );
      $(this).parent().parent().parent().next().find('input').trigger('change');
     }else{
      $(this).parent().parent().parent().next().find('input').prop( 'checked', false );
      $(this).parent().parent().parent().next().find('input').trigger('change');
     }
   });   
   $("table td input").on('change', function() {
      if($(this).is(':checked')){
      $(this).parent().parent().addClass('active');
     }else{
      $(this).parent().parent().removeClass('active');
     }
   });   
   $(".table-edit img").click(function() {
      $(".edit-popup").addClass('open');
       $(".edit-popup input").val($(this).prev().text());
       $(".table-edit span").removeClass('activetabletd');
       $(this).prev().addClass('activetabletd');
   });   
   $(".edit-popup__close, .edit-popup__close1").on('click', function() {
      $(".edit-popup").removeClass('open');
   });   

   $(".edit-popup__save").click(function() {
      $(".edit-popup").removeClass('open');
       $(".activetabletd").text($(".edit-popup input").val());
   });  

   $(".settings-admin__wrapper button").click(function(e) {
      e.preventDefault();
      $(".settings-admin-popup").addClass('open');
   });   
   $(".settings-admin-popup__close, .settings-admin-popup__close1").on('click', function() {
      $(".settings-admin-popup").removeClass('open');
   });   


   $(".task>img").click(function(e) {
      e.preventDefault();
      $(".task-popup").addClass('open');
      $(this).parent().addClass('tasktoremove');
   });  
   $(".task-popup__close1, .task-popup__close").click(function(event) {
      event.preventDefault();
      $(".task-popup").removeClass('open');
      $('.task').removeClass('tasktoremove');
   });  
   $(".task-popup__save").click(function(event) {
      $(".task-popup").removeClass('open');
      $('.tasktoremove').remove();
   });  

   $(".tasks__newtask").click(function(e) {
      $(".newtask-popup").addClass('open');
   });  
   $(".newtask-popup__close1, .newtask-popup__close").click(function(event) {
      $(".newtask-popup").removeClass('open');
   });  

   $(".openmenu").click(function() {
      $(".settings-admin-this").addClass('open');
   });  
   $(".settings-admin>p, .settings-admin__close").click(function() {
      $(".settings-admin").removeClass('open');
   });     
   $(".settings-admin__row input").keyup(function() {
      $(this).parents().eq(5).find('.settings-admin__save').prop('disabled',false);
   });   
   $('.settings-admin .nice-select .current').on('DOMSubtreeModified', function() {
      $(this).parents().eq(6).find('.settings-admin__save').prop('disabled',false);
   });     
   $('.settings-admin  .settings-admin__column input').on('change', function() {
      $(this).parents().eq(7).find('.settings-admin__save').prop('disabled',false);
   });     
   $(".settings__addnew").click(function() {
      $(".settings-admin-new").addClass('open');
   });  
   $("td[data-count] ~ td input").change(function() {
      var columncount = $(this).parent().index() + 1;
      var parentcount = $(this).parent().parent().find('td[data-count]').attr('data-count')
      if($(this).is(':checked')){
         $(this).parent().parent().nextAll().slice(0,parentcount).find('td:nth-child('+ columncount +') input').prop('checked',true);
      }else{
          $(this).parent().parent().nextAll().slice(0,parentcount).find('td:nth-child('+ columncount +') input').prop('checked',false);
      }
      
   });  


   $(".settings__template").click(function() {
      $(".settings__content-4").addClass('rows');
   });  
   $(".settings__content-4 .settings__save").click(function() {
      $(this).parent().parent().parent().find('.settings__card-hide').addClass('show');
   });  
   $(".settings__checkboxes input").change(function() {
      $(this).parent().parent().find('~ .settings__bottom').addClass('show');
   });  
   $(".settings__card input[type='checkbox']").change(function() {
      $(this).parents().eq(4).find('.settings__bottom').addClass('show');
   });  

   $("p[data-childs] input").change(function() {
      var parentcount = $(this).parent().attr('data-childs');
      if($(this).is(':checked')){
         $(this).parent().nextAll().slice(0,parentcount).find('input').prop('checked',true).trigger('change');
      }else{
          $(this).parent().nextAll().slice(0,parentcount).find('input').prop('checked',false).trigger('change');
      }
      
   });  
   $('.settings__wrapp .nice-select .current').on('DOMSubtreeModified', function() {
      $(this).parent().next('.settings__save').addClass('active');
   });     
   $('.settings__checkboxes input').on('change', function() {
      if($(this).is(':checked')){
         $(this).attr('checked',true);
      }else{
          $(this).attr('checked',false);
      }
      
   });     
   $('.settings__wrapper-users').on('keyup', '.settings__row:nth-last-child(2) input', function(e){
     if($(this).val().length > 0){
      $('<div class="settings__row"><input type="text"><img src="img/home/trash.png" alt=""></div>').insertAfter($(this).parent());
     }
   });    
   $('.settings__wrapper-users').on('click', '.settings__row>img', function(e){
      $(this).parent().remove();
    });       
   $('.settings__save-restrict').on('click', function() {
       $(this).parent().prev().find('input').next('label').css('color','#000');        
       $(this).parent().prev().find('input[checked]').next('label').css('color','red');  
   });     
   $('.settings__wrapp table td input').on('change', function() {
      $(this).parent().parent().parent().parent().parent().find('.settings__bottom').addClass('show');
   });     
   $('.settings__addnewcompany').on('click', function() {
      $('<div class="settings__list"><p></p> <div class="settings__row"> <span> Название </span> <input type="text"> </div> <div class="settings__row"> <span> ИНН </span> <input type="text"> </div> <div class="settings__row"> <span> ОГРН </span> <input type="text"> </div> <div class="settings__row"> <span> Юр. адрес </span> <input type="text"> </div> <div class="settings__row"> <span> Почт. адрес </span> <input type="text"> </div> <div class="settings__row"> <span> Р/счёт </span> <input type="text"> </div> <div class="settings__row"> <span> К/счёт </span> <input type="text"> </div> <div class="settings__row"> <span> БИК </span> <input type="text"> </div> <div class="settings__row"> <span> Почта </span> <input type="email"> </div> <div class="settings__row"> <span> Телефон </span> <input type="tel"> </div> </div>').insertBefore($(this).parent().find('.settings__bottom'));
      $('.settings__list .settings__row input').on('keyup', function() {
         $(this).parent().parent().parent().find('.settings__bottom').addClass('show');
      });  
      $('.settings__list>p').on('click', function() {
         $(this).parent().remove();
      });   
   }); 

   $('.settings__leadrow-wrapper').each(function() {
      if($(this).find('>input').val().length > 0){
         $(this).next().addClass('active');
      }
   });   
   $('.settings__leadrow-wrapper>input').on('keyup', function() {
      if($(this).val().length > 0){
         $(this).parent().next().addClass('active');
         $(this).parents().eq(3).find('.settings__bottom').addClass('show');
      }
      else{
         $(this).parent().next().removeClass('active');
      }
   });     
   $('.settings__wrapp').on('change', '.settings__leadrow-wrapper .settings__leadrow-checkbox input', function(e){
      $(this).parent().next().trigger('keyup');
      if($(this).is(':checked')){
         $(this).attr('checked',true);
      }else{
         $(this).attr('checked', false);
      }
      grabfunnel1();

   });
   $('.settings__wrapp').on('click', '.settings__leadrow>img:last-child', function(e){
      $(this).parent().remove();
   });     
   $('.settings__wrapp').on('keyup', '.settings__leadrow .settings__leadrow-wrapper>input', function(e){
      if($(this).val().length > 0){
         $(this).parent().next().addClass('active');
      }else{
         $(this).parent().next().removeClass('active');
      }      
   });
   var inputcountinc = 200;
   $('.settings__wrapp').on('keyup', '.settings__leadrow:nth-last-child(2) .settings__leadrow-wrapper>input', function(e){
      inputcountinc++;
      if($(this).val().length > 0){
         $(this).parent().next().addClass('active');
         if($(this).is(':not([disabled])')){
            $('<div draggable="true" class="settings__leadrow"><img src="img/home/grip-vertical-solid.svg" alt=""><div class="settings__leadrow-wrapper"><div class="settings__leadrow-checkbox"><input id="settings__leadrow'+inputcountinc+'" type="checkbox"> <label for="settings__leadrow'+inputcountinc+'"><img src="img/home/check.svg" alt=""></label></div><input type="text"></div><img src="img/home/trash.svg" alt=""></div>').insertBefore($(this).parent().parent().next('.settings__bottom'));
         }
         grabfunnel1();
      }else{
         $(this).parent().next().removeClass('active');
      }
   });   

   $('.settings__wrapp').on('keyup', '.settings__leadrow .settings__leadrow-wrapper>input', function(e){
      $(this).attr('value', $(this).val());
      grabfunnel1();
   });     
   $('.settings__wrapp').on('DOMSubtreeModified', function() {
      $(this).find('.settings__bottom').addClass('show');
   });     


   $('.settings__wrapp').on('keyup', '.settings__leadrow-other:nth-last-child(2) .settings__leadrow-wrapper>input', function(e){
      if($(this).val().length > 0){
         $(this).parent().next().addClass('active');
         if($(this).is(':not([disabled])')){
            $('<div class="settings__leadrow-other"><div class="settings__leadrow-wrapper"><input placeholder="Свой тип задачи" type="text"></div><img src="img/home/trash.svg" alt=""></div>').insertBefore($(this).parent().parent().next('.settings__bottom'));
         }
      }else{
         $(this).parent().next().removeClass('active');
      }
   });  
   $('.settings__wrapp').on('click', '.settings__leadrow-other>img:last-child', function(e){
      $(this).parent().remove();
   });  
   $('.content__night').on('click', function() {

      if($('body>p').hasClass('show')){
         $('body>p').removeClass('show');
         $('.opacity-popup').removeClass('show');
      }else{
         $('body>p').addClass('show');
         $('.opacity-popup').addClass('show');         
      }
   });     
   $('.opacity-popup>span').on('click', function() {
      $('.opacity-popup').removeClass('show');
   });   
   $('.deal').on('keyup', 'input[type="number"]', function(e){
      var productCount = parseFloat($(this).parent().parent().find('.product-count').val());
      var productCost = parseFloat($(this).parent().parent().find('.product-cost').val());
      $(this).parent().parent().find('.product-sum').val(productCount * productCost);
      $('.product-sum').trigger('change');
    });

    $('.chat__body').on('change', '.product-sum', function(e){
      var totalvalue = 0;
      console.log('re3');
      for (let step = 1; step <= $(this).parent().parent().parent().find('.product-sum').length; step++) {
         
         totalvalue += parseFloat($(this).parent().parent().parent().find('tr:nth-child('+step+')').find('.product-sum').val());
         console.log(totalvalue)
         $(this).parent().parent().parent().find('.product-total').val(totalvalue);
       }

    });

      $('.deal').on('click', '.score-tab-addtablerow', function(e){
       $('<tr>'+$(this).parent().prev().find('.product-total').parent().parent().prev().html()+'</tr>').insertBefore($(this).parent().prev().find('.product-total').parent().parent());
       var scoreTabaddtablerow = $(this).parent().prev().find('.product-total').parent().parent().parent().find('tr').length;
       $(this).parent().prev().find('.product-total').parent().parent().prev().find('td:first-child').text(scoreTabaddtablerow - 1);
     });   
   

     $('.deal').on('keyup', '.products-datalist', function(e){
      if($(this).val().length > 3){
         $(this).attr('list', $(this).attr('data-list'));
      }else{
         $(this).attr('list', '');
      }
    });   
     
   const slider = document.getElementById('slider');
   noUiSlider.create(slider, {

       start: [0.2],
       connect: [true,false],
       padding: [0,0],
       step: 0.01,
       range: {
           'min': [0],
           'max': [0.9]
       },
   });
   slider.noUiSlider.on('update', function (values, handle) {
       $('body>p.show').css('opacity', values[handle])
   });
});



$(document).click(function() {
   $('.colorPickSelector').trigger('DOMSubtreeModified');
      if (!$(".deal__radios").is(event.target) && !$(".deal__radios").has(event.target).length && $(".deal__radios").hasClass('show')) {
        
         $('.deal__radios').addClass('selected'); 
         
      }
      if ($('.deal__row-checkbox span').is(event.target)) {
             $('.deal__radios').removeClass('selected');   
      }
      if ($('.deal__radios p').is(event.target)) {
         $('.deal__radios').addClass('show'); 
         $('.deal__radios p').remove();         
      }

    var container = $(".deal__input");
    var container1 = $(".deal__mail");
    
    if (!container.is(event.target) && !container.has(event.target).length) {
        $('.deal__input .deal__submenu').removeClass('active');
    }
    if (!container1.is(event.target) && !container1.has(event.target).length) {
        $('.deal__mail .deal__submenu1').removeClass('active');
    }


  
    var container4 = $('.who-deal');
    if (!container4.is(event.target) && !container4.has(event.target).length) {
         $('.who-deal__sublist').removeClass('active');
    }  
    var container5 = $('.sms-deal');
    if (!container5.is(event.target) && !container5.has(event.target).length) {
         $('.sms-deal__sublist').removeClass('active');
    }  
    var container6 = $('.task_overdue');
    if (!container6.is(event.target) && !container6.has(event.target).length) {
          $('.task_overdue').removeClass('active');
    }  
    var container7 = $('.task_expectation');
    if (!container7.is(event.target) && !container7.has(event.target).length) {
          $('.task_expectation').removeClass('active');
    }  

    var container13 = $('.tasks__more');
    if (!container13.is(event.target) && !container13.has(event.target).length) {
        $(this).find('.tasks__nav').removeClass('active');
    }
    var container14 = $('.leads__more');
    if (!container14.is(event.target) && !container14.has(event.target).length) {
        $(this).find('.leads__nav').removeClass('active');
    }





    $('.deal__addtel input').keyup(function (event) {
      var addtellen = $(this).val().length;
      if(addtellen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });    

   $('.deal__addtel em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  
    $('.deal__addmail input').keyup(function (event) {
      var addtellen = $(this).val().length;
      if(addtellen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });     
   $('.deal__addmail em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  

    $('.deal__newtel input').keyup(function (event) {
      var newtellen = $(this).val().length;
      if(newtellen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });   
    $('.deal__newtel1 input').keyup(function (event) {
      var newtellen1 = $(this).val().length;
      if(newtellen1 > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });            
    $('.deal__newmail input').keyup(function (event) {
      var newmaillen = $(this).val().length;
      if(newmaillen > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });
    $('.deal__newmail1 input').keyup(function (event) {
      var newmaillen1 = $(this).val().length;
      if(newmaillen1 > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });       
   $('.deal__newtel em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  

   $('.deal__newmail em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  
   $('.deal__newtel1 em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  

   $('.deal__newmail1 em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  
    $('.deal__row-phone input').keyup(function (event) {
      var dealrowphone = $(this).val().length;
      if(dealrowphone > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   });      
    $('.deal__row-mail input').keyup(function (event) {
      var dealrowmail = $(this).val().length;
      if(dealrowmail > 3){
         $(this).prev().find('b').addClass('active');
         $(this).prev().find('em').removeClass('active');
      }else{
         $(this).prev().find('b').removeClass('active');
         $(this).prev().find('em').addClass('active');         
      }
   }); 
   $('.deal__row-phone em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  
   $('.deal__row-mail em.active').click(function (event) {
      $(this).parent().parent().remove();
   });  
   $('.deal__newback').click(function (event) {
      $(this).parent().remove();
   });   
   $('.deal__newback1').click(function (event) {
      $(this).parent().remove();
   });
   $('.deal__newback2').click(function (event) {
      
      $(this).parent().prev().remove();
      $(this).parent().remove();
   });


   
});






$(document).mousemove(function () {

   var wrapper = $('.message__wrapper').width();
   $('.message__peoples').css('min-width',wrapper);
   $('.message__peoples').css('max-width',wrapper);
   var peoples = $('.content__body').width();
   $('.message__wrapper').css('max-width',peoples*0.5); 
   $('.chat__body').each(function (event) {
      var chat = $(this).width();
      if(chat<660){
         $(this).find('.chat__me, .chat__he').css('max-width','100%');
      }else{
         $(this).find('.chat__me, .chat__he').css('max-width','100%');
      }
   });  
   var aside = $('.content__sidebar').width();
   $('.leads__top').css('width', 'calc(100% - '+ aside +'px - 24px - 19px)');
   $('.tasks__top').css('width', 'calc(100% - '+ aside +'px - 24px - 19px)');
   $('.leads__header').css('width', 'calc(100% - '+ aside +'px - 24px - 26px)');
   $('.tasks__header').css('width', 'calc(100% - '+ aside +'px - 24px - 26px)');
   $('.settings__header').css('width', 'calc(100% - '+ aside +'px - 24px - 19px)');
   $('.deal__content-wrapbtns').css('width', $('.deal__content').width());
});
   

$('.leads').scroll(function () {
     if($(this).scrollTop() > 60){
         $('.leads__header').addClass('scroll');
     }else{
         $('.leads__header').removeClass('scroll');
     }
    $('.leads__header').scrollLeft($(this).scrollLeft());
});
$('.tasks').scroll(function () {
     if($(this).scrollTop() > 60){
         $('.tasks__header').addClass('scroll');
     }else{
         $('.tasks__header').removeClass('scroll');
     }
    $('.tasks__header').scrollLeft($(this).scrollLeft());
});
$(window).resize(function () {
   $('.chat__body').each(function (event) {
      var chat = $(this).width();
      if(chat<660){
         $(this).find('.chat__me, .chat__he').css('max-width','100%');
      }else{
         $(this).find('.chat__me, .chat__he').css('max-width','100%');
      }
   });  

});

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}





//  var chartDom = document.getElementById('graphic__graph');
//  var myChart = echarts.init(chartDom);
//  var option;

// option = {
//    title: {
//      text: '',
//    },
//    tooltip: {
//      trigger: 'axis',
//      axisPointer: {
//        type: 'cross',
//        label: {
//          backgroundColor: '#5bb031'
//        }
//      }
//    },
//    legend: {
//     top:'0',  
//     textStyle:{
//       color:'#000'
//     },            
//     data: ['Seed Round', 'Private Round', 'Public sale', 'Team', 'Development']
//    },
//    grid: {
//      left: '3%',
//      right: '4%',
//      bottom: '3%',
//      containLabel: true,
//    },

//    xAxis: [
//      {
//       axisLabel: {
//           textStyle: {
//               color: '#000'
//           }
//       },      
//        type: 'category',
//        boundaryGap: false,     
//        data: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'] 
//      }
//    ],
//    yAxis: [
//      {
//       axisLabel: {
//           textStyle: {
//               color: '#000'
//           }
//       },       
//        type: 'value'
//      }
//    ],
//    series: [
//      {
//        name: 'Seed Round',
//        type: 'line',
//        color: '#40C1D3',
//        stack: 'Total',
//        areaStyle: {},
//        emphasis: {
//          focus: 'series'
//        },
//        data: [11500000, 17250000, 23000000, 28750000, 34500000, 40250000, 46000000, 51750000, 57500000, 63250000, 69000000, 74750000] 
//      },
//      {
//        name: 'Private Round',
//        type: 'line',
//        stack: 'Total',
//        color: '#ED4831',
//        areaStyle: {},
//        emphasis: {
//          focus: 'series'
//        },
//        data: [6000000, 9000000, 12000000, 12000000, 18000000, 18000000, 24000000, 24000000, 30000000, 30000000, 36000000, 39000000]
//      },
//      {
//        name: 'Public sale',
//        type: 'line',
//        stack: 'Total',
//        color: '#C1F1CE',
//        areaStyle: {},
//        emphasis: {
//          focus: 'series'
//        },
//        data: [4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000, 18000000, 20000000, 20000000, 20000000, 20000000]
//      },   
//      {
//        name: 'Team',
//        type: 'line',
//        stack: 'Total',
//        color: '#ED7631',
//        areaStyle: {},
//        emphasis: {
//          focus: 'series'
//        },
//        data:[0, 0, 0, 0, 0, 0, 12000000, 24000000, 36000000, 48000000, 60000000, 72000000]
//      },   
//      {
//        name: 'Development',
//        type: 'line',
//        stack: 'Total',
//        color: '#5bb031',
//        areaStyle: {},
//        emphasis: {
//          focus: 'series'
//        },
//        data:[0, 0, 0, 3000000, 6000000, 9000000, 12000000, 15000000, 18000000, 21000000, 24000000, 27000000]
//      },                                                                             
//    ]
// };


// option && myChart.setOption(option);

// function readURL(input) {
//    if (input.files && input.files[0]) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            $('#settings__ava').attr('src', e.target.result);
//        };
//        reader.readAsDataURL(input.files[0]);
//    }
// };

