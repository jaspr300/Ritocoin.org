<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The Ritocoin Project</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/lighter.css" rel="stylesheet">
  </head>
  <body>

    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand nav-link" href="#top">Ritocoin</a>
        </div> <!-- /.navbar-header -->

        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav navbar-right">
            <!-- <li><a href="#docs" class="nav-link">Whitepaper</a></li> -->
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#exchanges" class="nav-link">Exchanges</a></li>
            <li><a href="#connect" class="nav-link">Connect</a></li>
            <li><a href="#downloads" class="nav-link">Downloads</a></li>
            <li><a href="#pools" class="nav-link">Pools</a></li>
            <!-- <li><a href="#development">Development</a></li> -->
          </ul>
        </div> <!-- /.navbar-collapse -->
      </div> <!-- /.container -->
    </nav> <!-- /.navbar -->

    <div id="top" class="jumbotron">
      <div class="container">
        <h1>The Ritocoin Project</h1>
        <h2>Ritocoin is a blockchain software development project designed to experiment with alternative and additional concepts with ideas based on those begun by the Ravencoin project.</h2></p>
<P>
<center><img src="img/ritocoin.png" class="img-responsive" style="max-width:300px;"></center>
      </div> <!-- /.container -->
    </div> <!-- /.jumbotron -->

    <div class="container">
      <h3 id="about" class="subhead">What is Ritocoin</h3>
      <div class="row faqs">
        <p class="col-md-6 col-sm-6">
<strong style="font-size:1.4em;">Whitepaper</strong><br>
<a href="/docs/whitepaper_gfx.pdf" style="font-size:1.2em;">Read our whitepaper [PDF]</a>
<br><br>
          <strong>Ritocoin</strong><br>
Ritocoin launches with the spirit of community, cypherpunk culture and hacker ethics. Ritocoin is a fork of the Ravencoin codebase, which is an experimental blockchain and platform optimized for transferring assets, such as tokens, from one holder to another. The launch of Ritocoin offers several improvements to Ravencoin. First, a change in the proof-of-work mining algorithm, second, a commitment to keeping mining accessible to casual hobbyists, third, a roadmap for masternode functionality to be added, and finally, an emphasis on the community-driven development of user friendly features and add-on utilities. The culture of Ritocoin will be of rapid software development and frequent releases of experimental features.
<br><br>
Ritocoin is intended to be a bazaar of ideas prioritizing security, user control, privacy, censorship resistance, and fair distribution of hashrate to all members of the cryptocurrency community.
<br><br>
<strong>Masternodes</strong><BR>
Masternodes give miners fun and interesting goals to mine toward, as they work to build a holding sufficient to stake their own masternode. Many miners enjoy working together to pool their mined coins to create cooperatively managed masternodes. Sub-communities gather around these shared masternodes enhancing the experience for everyone involved. Ritocoin recognizes and appreciates the interesting features that other coins have added to their blockchain. We intend to explore the feasibility of incorporating these features into our blockchain. Instant transactions, in particular, is an innovation that masternodes can bring to a network. Privacy features are a second key feature we will investigate. Masternodes also give new and interesting ways for hobbyists to become more intimately involved with a coin project. Finally, permitting voting on important community matters is an attractive governance model that masternodes can help solve.
<br><br>
Through early 2019, we will be conducting open conversations about this topic with the Ritocoin community of miners and holders, and we will collaboratively design and implement a masternode system for Ritocoin. Masternodes will be available to anyone who owns enough RITO. The only way to obtain a masternode will be to mine RITO or obtain the coins from other RITO holders.
<br><br>
        </p>
        <p class="col-md-6 col-sm-6">
          <strong>Specifications</strong><br>
Proof-of-Work Algorithm: <a href="https://github.com/RitoProject/x21s_hash" target="_x21s">X21S</a><BR>
Block Time: 60 seconds<BR>
POW Block Reward: 5,000 RITO<BR>
Community fund: 1% first year<BR>
Difficulty Retargeting: DGW-180<BR>
Maximum Supply: ~21 billion<BR>
Pre-mine: None<BR>
Masternodes: Planned.<BR>
Asset layer: Activates at height 50,000<BR>
<BR>
          <strong>GPU Mineability</strong><br>
Ritocoin is anti-ASIC, anti-FPGA and anti-NiceHash, and is committed to remaining a coin that is always available for mining by cryptocurrency hobbyists. We designed our X21S algorithm to be mined by GPUs only, and we will further develop our hashing algorithm as advancements are made by the opposing forces.
<br><br>
<strong>The X21S Algorithm</strong><br>
The cornerstone feature of our coin at launch is the new X21S algorithm, inspired by X22i and X16S. The hashing algorithm begins with 16 algorithms shuffled and hashed in the manner prescribed by X16S, followed by 5 additional hashing algorithms: haval256, tiger, lyra2, gost512, and sha256. The inclusion of lyra2 brings numerous advantages, making parallelization of the algorithm practically impossible, with each step relying on the previous step having already been computed. It is a “friendly” algorithm that makes GPUs produce much less heat and uses less electricity during mining.
<br><br>
<strong>Community</strong><br>
We believe that the best ideas are discovered when many voices are heard. We desire our community to be a vocal group of differing opinions where the best ideas can float to the top and be considered. We must remain open and receptive to differing ideas, and be prepared to change even fundamental concepts in this project in response to those ideas and proposals.
<br><br>
The developer fund is a key component of fostering a development-oriented community. By setting aside coins from the block reward during the first year, we can offer bounties to give to community members for work they do. This has already borne fruit with the development of the GPL-licensed <a href="https://github.com/RitoProject/ccminer/" target="_ccminer">ccminer for X21S</a>, as well as improved compilation code, algorithm work, explorer code, an android wallet, and website development. We feel that the developer fund will continue to be a valuable tool to motivate the members of the community to invest their time and energy into this project during its early life.

        </p>
      </div> 
    </div> 


    <div class="container">
      <h3 id="exchanges" class="subhead">Exchanges</h3>
      <div class="row cool_circles">
        <div class="col-md-6 col-sm-6 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://www.safe.trade/"><img src="/img/exchange/safetrade.png" style="max-width:100px;"></a>
          </div>
          <h3><a href="https://www.safe.trade/">SafeTrade</a></h3>
        </div>

        <div class="col-md-6 col-sm-6 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://trade.mct.plus/"><img src="/img/exchange/mct.png" style="max-width:100px;"></a>
          </div>
          <h3><a href="https://trade.mct.plus/">MCT+</a></h3>
        </div> 

      </div> 
    </div> 

    <div class="container">
      <h3 id="connect" class="subhead">Connect</h3>
      <div class="row cool_circles">
        <div class="col-md-3 col-sm-3 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://github.com/RitoProject/"><img src="/img/connect/github.png" style="max-width:100px;"></a>
          </div>
          <h3><a href="https://github.com/RitoProject/">Github</a></h3>
        </div> 

        <div class="col-md-3 col-sm-3 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://discord.gg/Bueav8s"><img src="/img/connect/discord.png" style="max-width:100px;"></a>
          </div>
          <h3><a href="https://discord.gg/Bueav8s">Discord</a></h3>
        </div> 

        <div class="col-md-3 col-sm-3 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://bitcointalk.org/index.php?topic=5076284.0"><span class="glyphicon glyphicon-bullhorn"></span></a>
          </div>
          <h3><a href="https://bitcointalk.org/index.php?topic=5076284.0">[ANN]</a></h3>
        </div> 
        <div class="row cool_circles">
          <div class="col-md-3 col-sm-3 cool_circle">
            <div class="cool_circle-ball">
              <a href="https://twitter.com/ritocoin"><img src="/img/connect/twitter.png" style="max-width:100px;"></a>
            </div>
            <h3><a href="https://twitter.com/ritocoin">Twitter</a></h3>
          </div> 
        </div> 
      </div> 
      <div class="row cool_circles">

        <div class="col-md-4 col-sm-4 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://t.me/joinchat/I4nwmBYrHGggXsBbQf-yAw"><img src="/img/connect/telegram.png" style="max-width:100px;"></a>
          </div>
          <h3><a href="https://t.me/joinchat/I4nwmBYrHGggXsBbQf-yAw">Telegram</a></h3>
        </div> 

        <div class="col-md-4 col-sm-4 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://insight.ritocoin.org/"><span class="glyphicon glyphicon-link"></span></a>
          </div>
          <h3><a href="https://insight.ritocoin.org/">Explorer</a></h3>
        </div> 
        <div class="col-md-4 col-sm-4 cool_circle">
          <div class="cool_circle-ball">
            <a href="https://rito.safc.cc/"><span class="glyphicon glyphicon-link"></span></a>
          </div>
          <h3><a href="https://rito.safc.cc/">Explorer2</a></h3>
        </div> 

      </div> 
    </div> 

    <div class="container">
      <h3 id="downloads" class="subhead">Downloads / Wallets</h3>
      <div class="row faqs">
        <p class="col-md-12 col-sm-12">
          <strong>Desktop Wallet</strong><br>
            <span class="glyphicon glyphicon-briefcase"></span>
            <B><a href="https://github.com/RitoProject/Ritocoin/releases">Ritocoin Desktop Wallet for Windows, Mac or Linux</a></B>
        </p>
        <p class="col-md-12 col-sm-12">
          <strong>Web Wallet</strong><br>
            <span class="glyphicon glyphicon-cloud"></span>
            <B><a href="https://wallet.ritocoin.org/">Ritocoin Web Wallet</a></B>
        </p>
        <p class="col-md-12 col-sm-12">
          <strong>Paper Wallet</strong><br>
            <span class="glyphicon glyphicon-file"></span>
            <B><a href="https://paper.ritocoin.org/">Ritocoin Paper Wallet Generator</a></B>
        </p>
        <p class="col-md-12 col-sm-12">
          <strong>Ritocore and Insight</strong><br>
            <span class="glyphicon glyphicon-file"></span>
            <B><a href="https://github.com/traysi/ritocore/">Ritocore Github</a></B>
        </p>
        <p class="col-md-12 col-sm-12">
          <strong>Android Wallet</strong><br>
            <span class="glyphicon glyphicon-phone"></span>
            <B>Coming very soon!</B>
        </p>
      </div> 
    </div> 

    <div class="container">
      <h3 id="pools" class="subhead">Mining Pools</h3>

<?php
$pools['antares']['img'] = 'antares.png';
$pools['blockify']['img'] = 'blockifyxyz.png';
$pools['gos']['img'] = 'gos.png';
$pools['dapool']['img'] = 'dapool.png';
$pools['focus-pool']['img'] = 'focus-pool.png';
$pools['icemining']['img'] = 'icemining.png';
$pools['marspool']['img'] = 'marspool.png';
$pools['minermore']['img'] = 'minermore.png';
$pools['miningpatriot']['img'] = 'miningpatriot.png';
$pools['nosuchpool']['img'] = 'nosuchpool.png';
$pools['phi-phi-pool']['img'] = 'phi-phi-pool.png';
$pools['pickaxe']['img'] = 'pickaxe.png';
$pools['hashdom']['img'] = 'hashdom.png';

$pools['antares']['link'] = 'https://antares-pool.club';
$pools['blockify']['link'] = 'https://blockify.xyz';
$pools['gos']['link'] = 'https://gos.cx';
$pools['dapool']['link'] ='https://xd.dapool.me';
$pools['focus-pool']['link'] ='https://focus-pool.com';
$pools['icemining']['link'] ='https://icemining.ca';
$pools['marspool']['link'] ='https://marspool.org';
$pools['minermore']['link'] ='https://minermore.com/';
$pools['miningpatriot']['link'] ='https://miningpatriot.com';
$pools['nosuchpool']['link'] ='https://nosuchpool.cloud';
$pools['phi-phi-pool']['link'] ='https://phi-phi-pool.com';
$pools['pickaxe']['link'] ='https://pickaxe.pro';
$pools['hashdom']['link'] ='https://hashdom.org/site/info?algo=x21s&coin=RITO';
?>

      <div class="row cool_circles">
<?php
$x = 0;
if(is_array($pools)) {
  while (list($pool,$v)=each($pools)) {
    if ($x % 3 == 0) {
      print '</div><div class="row cool_circles">';
    }
    $img = $pools[$pool]['img'];
    $link = $pools[$pool]['link'];
    print '
    <div class="col-md-4 col-sm-4 cool_circle">
      <div class="cool_circle-ball">
        <a href="'.$link.'"><img src="/img/pools/'.$img.'" style="max-width:100px;"></a>
      </div>
      <h3><a href="'.$link.'">'.$pool.'</a></h3>
    </div>
    ';
    $x++;
  }
}
?>

      </div> <!-- /.row -->
    </div> <!-- /.container -->

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
