// import React from 'react'
// import $ from 'JQuery';



// const RatingWidget = () => {

//     $(document).ready(function () {

//         /* 1. Visualizing things on Hover - See next part for action on click */
//         $('#stars li').on('mouseover', function () {
//             var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

//             // Now highlight all the stars that's not after the current hovered star
//             $(this).parent().children('li.star').each(function (e) {
//                 if (e < onStar) {
//                     $(this).addClass('hover');
//                 }
//                 else {
//                     $(this).removeClass('hover');
//                 }
//             });

//         }).on('mouseout', function () {
//             $(this).parent().children('li.star').each(function (e) {
//                 $(this).removeClass('hover');
//             });
//         });


//         /* 2. Action to perform on click */
//         $('#stars li').on('click', function () {
//             var onStar = parseInt($(this).data('value'), 10); // The star currently selected
//             var stars = $(this).parent().children('li.star');

//             for (i = 0; i < stars.length; i++) {
//                 $(stars[i]).removeClass('selected');
//             }

//             for (i = 0; i < onStar; i++) {
//                 $(stars[i]).addClass('selected');
//             }

//             // JUST RESPONSE (Not needed)
//             var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
//             var msg = "";
//             if (ratingValue > 1) {
//                 msg = "Thanks! You rated this " + ratingValue + " stars.";
//             }
//             else {
//                 msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
//             }
//             responseMessage(msg);

//         });


//     });


//     function responseMessage(msg) {
//         $('.success-box').fadeIn(200);
//         $('.success-box div.text-message').html("<span>" + msg + "</span>");
//     }
//     return (
//         <>
//             <header class='header text-center'>
//                 <h2>Rating Widget</h2>
//                 <p>A simple star rating widget with <b>jQuery</b> and <b>FontAwesome</b> icons.</p>
//             </header>

//             <section class='rating-widget'>


//                 <div class='rating-stars text-center'>
//                     <ul id='stars'>
//                         <li class='star' title='Poor' data-value='1'>
//                             <i class='fa fa-star fa-fw'></i>
//                         </li>
//                         <li class='star' title='Fair' data-value='2'>
//                             <i class='fa fa-star fa-fw'></i>
//                         </li>
//                         <li class='star' title='Good' data-value='3'>
//                             <i class='fa fa-star fa-fw'></i>
//                         </li>
//                         <li class='star' title='Excellent' data-value='4'>
//                             <i class='fa fa-star fa-fw'></i>
//                         </li>
//                         <li class='star' title='WOW!!!' data-value='5'>
//                             <i class='fa fa-star fa-fw'></i>
//                         </li>
//                     </ul>
//                 </div>

//                 <div class='success-box'>
//                     <div class='clearfix'></div>

//                     <div class='text-message'></div>
//                     <div class='clearfix'></div>
//                 </div>



//             </section>

//         </>
//     )
// }

// export default RatingWidget
