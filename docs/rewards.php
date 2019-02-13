<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Block reward schedule for the Ritocoin Project</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/lighter.css" rel="stylesheet">
  </head>
  <body>


    <div id="top" class="jumbotron">
      <div class="container">
        <h1>Block Reward Schedule for Ritocoin</h1>
        <h2>This page explains how the block reward reductions will occur for Ritocoin's lifespan.</h2></p>
      </div> <!-- /.container -->
    </div> <!-- /.jumbotron -->

    <div class="container">
<center>
<h2>Short Term</h2>
Ritocoin was launched with the block reward and schedule unchanged from our parent Ravencoin. 5000 RITO per block were generated with a "halvening every 4 years" schedule. We are changing that, and the new schedule is as follows:
<BR><BR>
Starting at height 157,081 we will begin a reduction of future block rewards in a smooth exponential curve down. We will sharply reduce the block reward from 5000 down to 1000 within 2 months after activation of this schedule. Once we reach 1000, we will enter into the long-term reduction curve that will eventually take us down to a permanent block reward of 10 RITO per block.
<BR><BR>
<img src="chart1.png" class="img-responsive" style="border: 2px solid black;"><BR><BR>
<h2>Long Term</h2>
Here is what the long term effect looks like:
<BR><BR>
<img src="chart2.png" class="img-responsive" style="border: 2px solid black;"><BR><BR>
Here is the same long term view expressed logarithmically.
<BR><BR>
<img src="chart3.png" class="img-responsive" style="border: 2px solid black;"><BR><BR>
<BR><BR>
<h2>Why make this change?</h2>
This overhaul of our reward system was done after careful evaluation of the consequences previous coin projects have experienced who have high block rewards. This overhaul reduces the overall number of circulating coins generated in the future, reducing inflation and discouraging "dumpers" who are only mining this coin to auto-exchange their mined coins into BTC. Our previous high block reward will not meet our needs to evolve this coin project into the future. The cost to issue assets will not be changed.


</center>
    </div> 



    <footer>
      <div class="container clearfix">
        <p class="pull-left">
          Provided by the Ritocoin Project
        </p>
        <p class="pull-right">
          <a href="https://ritocoin.org/">Ritocoin.org</a>
        </p>
      </div> <!-- /.container -->
    </footer>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
      $(".nav-link").click(function(e) {
        e.preventDefault();
        var link = $(this);
        var href = link.attr("href");
        $("html,body").animate({scrollTop: $(href).offset().top - 80}, 500);
        link.closest(".navbar").find(".navbar-toggle:not(.collapsed)").click();
      });
    </script>
  </body>
</html>
