<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link href="{{asset('/css/app.css')}}" rel="stylesheet" type="text/css"/>
    <style>

    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="text-center full-height text-white container-table" id="app1"
         :style="{ 'background-image': 'url(' + backgroundimg + ')' }">
        <div class="row vertical-center-row">
            <h3 class="font-weight-bold">@{{ currentTime }}</h3>
            <h4>@{{greet}}</h4>
        </div>
        <span class="quate">@{{ quate }}</span>
    </div>
</div>
</body>
<script type="text/javascript" src="{{asset('/js/app.js')}}"></script>
<script type="text/javascript" src="{{asset('/js/vueJs.js')}}"></script>
</html>
