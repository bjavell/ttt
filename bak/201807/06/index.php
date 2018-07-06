<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <base href="/pogi/" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <meta name="apple-mobile-web-app-status-bar-style" content="yes" />

    <link rel="stylesheet" href="css\dist\css\mobile-angular-ui-base.min.css">
    <link rel="stylesheet" href="css\dist\css\mobile-angular-ui-hover.css">
    <link rel="stylesheet" href="css\dist\css\angular-material.css">
    <title></title>

    <style >
    .card-media {
      background-color: #999999; }
      ::-webkit-scrollbar {
          width: 0px;
      }


      .cont-only {
        width: 47% !important;
        display: inline-block !important;
        margin-right: 0px;
      }

       #horizontal-container {
  height: 60px;
  width: 100%;
  max-width: 830px;}

 .repeated-item {
  border-right: 1px solid #ddd;
  box-sizing: border-box;
  display: inline-block;
  padding-top: 10px;
  margin-top: 15px;
  text-align: center;
  width: 50px; }

 md-virtual-repeat-container {
  height: 100px;
  border: solid 1px grey;
background-color: white;}


/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
*/
    </style>
  </head>
  <body ng-app="myApp">

   <!-- Sidebars -->
   <div class="sidebar sidebar-left"><!-- ... --></div>
   <div class="sidebar sidebar-right"><!-- ... --></div>

   <div class="app">
     <div class="navbar navbar-app navbar-absolute-top"><!-- Top Navbar -->
       <div class="navbar-brand navbar-brand-center">
         <btn>
         <img src="assets\mstche.png" alt="..." width="20px" height="20px" style="margin: 0px !important;" />
       </btn>
       </div>

       <!-- <div class="btn-group pull-left">
        <div class="btn btn-navbar">
          Left Action
        </div>
      </div>

      <div class="btn-group pull-right">
        <div class="btn btn-navbar">
          Right Action
        </div>
      </div> -->
     </div>
     <div class="navbar navbar-app navbar-absolute-bottom" ng-controller="MainController"><!-- Bottom Navbar -->
       <div class="btn-group justified">
            <a ng-click="home()" class="btn btn-navbar btn-icon-only"><i class="fa fa-home fa-navbar"></i></a>
            <a ng-click="userHome()" class="btn btn-navbar btn-icon-only"><i class="fa fa-list fa-navbar"></i></a>
            <a ng-click="userHome()" class="btn btn-navbar btn-icon-only"><i class="fa fa-cog fa-navbar"></i></a>
        </div>
     </div>

     <!-- App body -->
     <div class="app-body">
        <ng-view class="app-content"></ng-view>
     </div><!-- ~ .app -->

   <!-- Modals and Overlays -->
   <div ui-yield-to="modals"></div>


   <script src="js\dist\angular.js"></script>
   <script src="js\dist\angular-material.js"></script>
   <script src="js\dist\angular-route.js"></script>
   <script src="js\dist\mobile-angular-ui.js"></script>
   <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.js"></script> -->
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-aria.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-messages.min.js"></script>
   <script src="js\pogi.js"></script>
 </body>
</html>
