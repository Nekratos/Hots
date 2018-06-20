var APP = (function ($) {

  /**
   * Modules
   *
   * app
   * storage
   */
  var app     = {}
  var Storage = window.LSTORE;

  /**
   * Module Properties
   *
   * config
   * url
   * $el
   * settings
   * init
   * plugins
   * events
   * forms
   * loader
   * 
   */
  app = {

    // Config
    config : {
      environment : window.location.href.match(/(localhost)/g) ? 'development' : 'production',
      // debug : window.location.href.match(/(localhost|.dev)/g) ? true : false,
      debug : true,
    },

    url : window.location.href.match(/(localhost|.dev)/g) ? (window.location.origin + '/') : 'http://elzii.github.io/hots-tier-list/',


    // Elements
    $el : {
      body : $('body'),

      loader: $('#loader'),

      nav : {
        main : $('#nav--main'),
      },

      heroes : $('#heroes'),
      heroes_wrap : $('.heroes-wrap'),
      hero_filter : $('#hero-filter'),

      tiers : $('#tiers'),

      ip_counts : $('#ip-counts'),
      
      role_counts : $('#role-counts'),

      inputs : {
        short_url : $('#input--short_url'),
        json_export : $('#input--json-export'),
      },

      views : {
        index : $('#view--index'),
      },

      modals : {
        url_shortener : $('#modal--url-shortener'),
        json_export : $('#modal--json-export'),
      },
    },


    dir : {
      js : rootLocation() + 'assets/js/',
      css : rootLocation() + 'assets/css/',
      images : rootLocation() + 'assets/images/',
    },


    console : {
      color : {
        'error'     : '#da1a1a',
        'event'     : '#3d8627',
        'function'  : '#3db330',
        'callback'  : '#6c6c6c',
        'object'    : '#ac07db',
        'animation' : '#c3028f',
        'control'   : '#d2a946',
        'plugin'    : '#e734d0',
        'waypoint'  : '#4e77c1',
        'hash'      : '#ad74ed',
        'number'    : '#1c1c1c',
      }
    },

  };



  /**
   * Init
   */
  app.init = function () {

    // plugin init & general event bindings
    this.plugins()
    this.events()
    this.forms.init()
    
    this.heroes.init()
  }



  /**
   * Plugins
   */
  app.plugins = function() {

    // Dragula
    if ( window.dragula && window.dragula !== undefined ) {
      if ( app.config.debug ) console.log('%cPLUGIN:', 'color:#8e2fb1', 'dragula.js')
    }

    // Sticky
    if ( $.fn.sticky ) {

      $('.sticky').sticky({
        topSpacing: 60
      })
    }

    // Fast Live Filter
    if ( $.fn.fastLiveFilter) {
      if ( app.config.debug ) console.log('%cPLUGIN:', 'color:#8e2fb1', 'jquery.fastLiveFilter.js')
    }

  }


  /**
   * Event Listeners
   */
  app.events = function() {

    // Dropdown toggle
    $(document).on('click', '.selector', function (event) {

      event.preventDefault()


    })

   

  }



  /**
   * Heroes
   */
  app.heroes = {

    names : {
      'abathur': {
        fullname: 'Abathur',
        ip: 'StarCraft',
        role: 'Specialist'
      },
      'alarak': {
      	fullname: 'Alarak',
      	ip: 'StarCraft',
      	role: 'Assassin'
      },
      'alexstrasza': {
      	fullname: 'Alexstrasza',
      	ip: 'Warcraft',
      	role: 'Support'
      },
      'ana': {
      	fullname: 'Ana',
      	ip: 'Overwatch',
      	role: 'Support'
      },
      'anubarak': {
        fullname: 'Anub\'arak',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'artanis': {
        fullname: 'Artanis',
        ip: 'StarCraft',
        role: 'Warrior'
      },
      'arthas': {
        fullname: 'Arthas',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'auriel': {
      	fullname: 'Auriel',
      	ip: 'Diablo',
      	role: 'Support'
      },
      'azmodan': {
        fullname: 'Azmodan',
        ip: 'Diablo',
        role: 'Specialist'
      },
      'blaze': {
      	fullname: 'Blaze',
      	ip: 'StarCraft',
      	role: 'Warrior'
      },
      'brightwing': {
        fullname: 'Brightwing',
        ip: 'Warcraft',
        role: 'Support'
      },
      'cassia': {
      	fullname: 'Cassia',
      	ip: 'Diablo',
      	role: 'Assassin'
      },
      'chen': {
        fullname: 'Chen',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'cho': {
        fullname: 'Cho',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'chromie': {
        fullname: 'Chromie',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'deckard': {
      	fullname: 'Deckard',
      	ip: 'Diablo',
      	role: 'Support'
      },
      'dehaka': {
        fullname: 'Dehaka',
        ip: 'StarCraft',
        role: 'Warrior'
      },
      'diablo': {
        fullname: 'Diablo',
        ip: 'Diablo',
        role: 'Warrior'
      },
      'dva': {
      	fullname: 'D.va',
      	ip: 'Overwatch',
      	role: 'Warrior'
      },
      'etc': {
        fullname: 'E.T.C',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'falstad': {
        fullname: 'Falstad',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'fenix': {
      	fullname: 'Fenix',
      	ip: 'StarCraft',
      	role: 'Assassin'
      },
      'gall': {
        fullname: 'Gall',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'garrosh': {
      	fullname: 'Garrosh',
      	ip: 'Warcraft',
      	role: 'Warrior'
      },
      'gazlowe': {
        fullname: 'Gazlowe',
        ip: 'Warcraft',
        role: 'Specialist'
      },
      'genji': {
      	fullname: 'Genji',
      	ip: 'Overwatch',
      	role: 'Assassin'
      },
      'greymane': {
        fullname: 'Greymane',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'guldan': {
      	fullname: 'Gul\'dan',
      	ip: 'Warcraft',
      	role: 'Assassin'
      },
      'hanzo': {
      	fullname: 'Hanzo',
      	ip: 'Overwatch',
      	role: 'Assassin'
      },
      'illidan': {
        fullname: 'Illidan',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'jaina': {
        fullname: 'Jaina',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'johanna': {
        fullname: 'Johanna',
        ip: 'Diablo',
        role: 'Warrior'
      },
      'junkrat': {
      	fullname: 'Junkrat',
      	ip: 'Overwatch',
      	role: 'Assassin'
      },
      'kaelthas': {
        fullname: 'Kael\'thas',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'kelthuzad': {
        fullname: 'Kel\'Thuzad',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'kerrigan': {
        fullname: 'Kerrigan',
        ip: 'StarCraft',
        role: 'Assassin'
      },
      'kharazim': {
        fullname: 'Kharazim',
        ip: 'Diablo',
        role: 'Support'
      },
      'leoric': {
        fullname: 'Leoric',
        ip: 'Diablo',
        role: 'Warrior'
      },
      'lili': {
        fullname: 'Li Li',
        ip: 'Warcraft',
        role: 'Support'
      },
      'li-ming': {
        fullname: 'Li-Ming',
        ip: 'Diablo',
        role: 'Assassin'
      },
      'lt-morales': {
        fullname: 'Lt Morales',
        ip: 'StarCraft',
        role: 'Support'
      },
       'lucio': {
        fullname: 'Lucio',
        ip: 'Overwatch',
        role: 'Support'
      },
      'lunara': {
        fullname: 'Lunara',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'maiev': {
        fullname: 'Maiev',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'malfurion': {
        fullname: 'Malfurion',
        ip: 'Warcraft',
        role: 'Support'
      },
      'malthael': {
        fullname: 'Malthael',
        ip: 'Diablo',
        role: 'Assassin'
      },
      'medivh': {
        fullname: 'Medivh',
        ip: 'Warcraft',
        role: 'Specialist'
      },
      'muradin': {
        fullname: 'Muradin',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'murky': {
        fullname: 'Murky',
        ip: 'Warcraft',
        role: 'Specialist'
      },
      'nazeebo': {
        fullname: 'Nazeebo',
        ip: 'Diablo',
        role: 'Specialist'
      },
      'nova': {
        fullname: 'Nova',
        ip: 'StarCraft',
        role: 'Assassin'
      },
      'probius': {
        fullname: 'Probius',
        ip: 'Starcraft',
        role: 'Specialist'
      },
      'ragnaros': {
        fullname: 'Ragnaros',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'raynor': {
        fullname: 'Raynor',
        ip: 'StarCraft',
        role: 'Assassin'
      },
      'rehgar': {
        fullname: 'Rehgar',
        ip: 'Warcraft',
        role: 'Support'
      },
      'rexxar': {
        fullname: 'Rexxar',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'samuro': {
        fullname: 'Samuro',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'sgt-hammer': {
        fullname: 'Sgt Hammer',
        ip: 'StarCraft',
        role: 'Specialist'
      },
      'sonya': {
        fullname: 'Sonya',
        ip: 'Diablo',
        role: 'Warrior'
      },
      'stitches': {
        fullname: 'Stitches',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'stukov': {
        fullname: 'Stukov',
        ip: 'Starcraft',
        role: 'Support'
      },
      'sylvanas': {
        fullname: 'Sylvanas',
        ip: 'Warcraft',
        role: 'Specialist'
      },
      'tassadar': {
        fullname: 'Tassadar',
        ip: 'StarCraft',
        role: 'Support'
      },
      'the-butcher': {
        fullname: 'The Butcher',
        ip: 'Diablo',
        role: 'Assassin'
      },
	  'the-lost-vikings': {
        fullname: 'The Lost Vikings',
        ip: 'Blizzard',
        role: 'Specialist'
      },
      'thrall': {
        fullname: 'Thrall',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'tracer': {
        fullname: 'Tracer',
        ip: 'Overwatch',
        role: 'Assassin'
      },
      'tychus': {
        fullname: 'Tychus',
        ip: 'StarCraft',
        role: 'Assassin'
      },
      'tyrael': {
        fullname: 'Tyrael',
        ip: 'Diablo',
        role: 'Warrior'
      },
      'tyrande': {
        fullname: 'Tyrande',
        ip: 'Warcraft',
        role: 'Support'
      },
      'uther': {
        fullname: 'Uther',
        ip: 'Warcraft',
        role: 'Support'
      },
      'valeera': {
        fullname: 'Valeera',
        ip: 'Warcraft',
        role: 'Assassin'
      },
      'valla': {
        fullname: 'Valla',
        ip: 'Diablo',
        role: 'Assassin'
      },
      'varian': {
        fullname: 'Varian',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'xul': {
        fullname: 'Xul',
        ip: 'Diablo',
        role: 'Specialist'
      },
      'yrel': {
        fullname: 'Yrel',
        ip: 'Warcraft',
        role: 'Warrior'
      },
      'zagara': {
        fullname: 'Zagara',
        ip: 'StarCraft',
        role: 'Specialist'
      },
      'zarya': {
        fullname: 'Zarya',
        ip: 'Overwatch',
        role: 'Warrior'
      },
      'zeratul': {
        fullname: 'Zeratul',
        ip: 'StarCraft',
        role: 'Assassin'
      },
      'zuljin': {
        fullname: 'Zul\'Jin',
        ip: 'Warcraft',
        role: 'Assassin'
      },
    },

    containers : [
      __('heroes'),
      __('tier1'),
      __('tier2'),
      __('tier3'),
      __('tier4'),
      __('tier5'),
    ],

    init: function() { 

      this.events()

      this.renderHeroAvatars()

      // Check if query string
      if ( !$.isEmptyObject( QueryString() ) ) {
        this.decodeQueryString( QueryString() )
      }

      this.readSavedHeroTiers(function() {

        // Live Filter
        app.$el.hero_filter.fastLiveFilter('#heroes', {
          callback: function(total) {
            // app.$el.hero_filter.fastLiveFilter('#heroes')
          }
        })

      })

      this.renderTierHeroCounts()
      this.renderHeroIPCounts()
      this.renderHeroRoleCounts()
    },

    events: function() {

      var _this = app.heroes

      // Save
      $(document).on('click', '#save', function (event) {
        event.preventDefault()
        var data = _this.getCurrentHeroTiers()
        _this.saveCurrentHeroTiers(data)
      })

      // Clear
      $(document).on('click', '#reset', function (event) {
        event.preventDefault()
        _this.clearSavedHeroTierData()
        _this.showHeroesPane()

        // clear search filter
        app.$el.hero_filter.val('')        
        app.$el.hero_filter.keydown()
      })

      // Link
      $(document).on('click', '#link', function (event) {
        event.preventDefault()

        var tiers     = _this.getCurrentHeroTiers(),
            save_url  = app.url + '?import=' + _this.encodeTierList(tiers)

        if ( app.config.debug ) console.log('%cEVENT', 'color:'+app.console.color['event'], '- ' + 'click #link ', save_url )

        app.urlShortener.create( save_url, function (data) {

          // Get short URL
          var short_url = data.shorturl;

          // Set input value
          app.$el.inputs.short_url.val( short_url )

          // Show modal
          app.$el.modals.url_shortener.modal('show')

          // Select the URL input text
          app.$el.inputs.short_url[0]
            .setSelectionRange(0, 9999)

          if ( app.config.debug ) console.log('%cCALLBACK', 'color:'+app.console.color['callback'], '- ' + 'app.urlShortener.create() ', data )

        })

      })

      // Clear
      $(document).on('click', '#export', function (event) {
        event.preventDefault()
        
        var data = _this.getCurrentHeroTiers(),
            json = JSON.stringify(data, null, 2)

        app.$el.inputs.json_export.html( syntaxHighlight(json) )

        app.$el.modals.json_export.modal('show')
      })

      // Click handler for IP sorting
      $(document).on('click', '.ip-count', function (event) {
        event.preventDefault()
        
        var $this = $(this),
            $el   = $this.find('.ip-count--name'),
            ip    = $el.attr('id').split('--')[1]

        // input text into search
        app.$el.hero_filter.val(ip)        
        app.$el.hero_filter.keydown()
      })
      
      // Click handler for Role sorting
      $(document).on('click', '.role-count', function (event) {
        event.preventDefault()
        
        var $this = $(this),
            $el   = $this.find('.role-count--name'),
            role  = $el.attr('id').split('--')[1]

        // input text into search
        app.$el.hero_filter.val(role)        
        app.$el.hero_filter.keydown()
      })


      // Dragula
      dragula( this.containers, {})
        .on('drag', function (el) {
          
        })
        .on('drop', function (el) {
          // Recount
          _this.renderTierHeroCounts()
        })

    },


    /**
     * Render Hero Avatars
     * Loop through hero and render their avatars
     */
    renderHeroAvatars: function(callback) {

      var _this     = app.heroes,
          extension = '.png';

      // _this.names.forEach(function (hero, i) {
      $.each( _this.names, function (name, hero) {

        var name     = name,
            fullname = hero.fullname,
            ip       = hero.ip,
            role	 = hero.role;

        
        app.$el.heroes.append('\
          <div class="hero simptip-position-top" style="background-image:url(assets/images/avatars/'+name+'.png)" data-name="'+name+'" data-ip="'+ip+'" data-tooltip="'+fullname+'" data-role="'+role+'" > \
            <div class="hero-meta"> \
              <span data-hero-name>'+fullname+'</span> \
              <span data-hero-ip>'+ip+'</span> \
              <span data-hero-role>'+role+'</span> \
            </div> \
          </div> \
        ')
      })
      
    },


    /**
     * Get Current Hero Tiers
     * Check where all heros are current placed 
     *
     * @return {Object} tiers
     */
    getCurrentHeroTiers: function() {

      var tiers = {
        '1' : [],
        '2' : [],
        '3' : [],
        '4' : [],
        '5' : [],
      }

      // Loop each hero and save current tier position
      $('.hero').each(function (i, item) {

        var hero = $(item).data('name'),
            tier = $(item).parent().data('tier')

        if ( tier !== undefined ) {
          tiers[tier].push(hero)
        }
      })

      if ( app.config.debug ) console.log('%cFUNCTION', 'color:'+app.console.color['function'], '- ' + 'getCurrentHeroTiers ' + 'saved current tier locations to local storage' )
      if ( app.config.debug ) console.log('Tiers: ', tiers)

      return tiers;
    },

    /**
     * Save Current Hero Tiers
     * 
     * @param  {Object} data 
     */
    saveCurrentHeroTiers: function(data) {
      // Save to LS
      Storage.set( 'tiers', data )
    },


    /**
     * Read Saved Hero Tiers
     */
    readSavedHeroTiers: function(callback) {

      if ( Storage.get('tiers') ) {

        var data = Storage.get('tiers')

        if ( app.config.debug ) console.log('%cFUNCTION', 'color:'+app.console.color['function'], '- ' + 'readSavedHeroTiers ' + 'reading saved tier data from local storage', data )

        $.each(data, function (tier, heroes) {
          
          heroes.forEach(function (hero) {
            
            // Find hero in left column
            var $hero = $('.hero[data-name="'+hero+'"]'),
                $tier = $('.tier[data-tier="'+tier+'"]')

            $hero.appendTo( $tier )

          })
        })

        callback()
      } else {
        callback()
      }
    },



    /**
     * Clear Saved Hero Tier Data
     * Remove local storage item
     */
    clearSavedHeroTierData: function() {

      Storage.remove('tiers')

      // Move all back to left column
      var $heros = $('.tier').find('.hero')

      $heros.each(function (i, hero) {

        $(hero).appendTo( app.$el.heroes )
      })
    },

    /**
     * Get Tier Hero Counts
     * 
     * @return {Object} hero counts
     */
    getTierHeroCounts: function() {

      var unsorted = app.$el.heroes.find('.hero').length,
          sorted   = {};

      $('.tier').each(function (i, tier) {
        sorted[i+1] = $(tier).children().length
      })

      return {
        'unsorted': unsorted,
        'sorted': sorted
      }
    },

    /**
     * Render Tier Hero Counts
     */
    renderTierHeroCounts: function() {

      var counts = this.getTierHeroCounts()

      // Unsorted
      app.$el.heroes_wrap.find('.hero-count').html( counts.unsorted )

      if ( counts.unsorted == 0 ) {
        this.hideHeroesPane()
      } else {
        this.showHeroesPane()
      }

      // Sorted
      $.each( counts.sorted, function (tier, count) {
        $('.tier[data-tier="'+tier+'"]').parent().find('.hero-count').html( count )
      })

    },

    /**
     * Hide Heroes Pane
     */
    hideHeroesPane: function() {
      app.$el.heroes.parent().parent().hide()
      app.$el.tiers
        .removeClass('col-sm-6')
        .addClass('col-sm-12')
    },

    /**
     * Show Heroes Pane
     */
    showHeroesPane: function() {
      app.$el.heroes.parent().parent().show()
      app.$el.tiers
        .removeClass('col-sm-12')
        .addClass('col-sm-6')
    },

    /**
     * Encode Tier List
     * Encode the LS data/json to base64 string
     * @param  {Object} data 
     * @return {String} base64
     */
    encodeTierList: function(data) {

      var json   = JSON.stringify(data),
          base64 = btoa( json )

      if ( app.config.debug ) console.log('Base64 Tier Hash: ',  base64 )

      return base64;

    },

    /**
     * Decode Query String
     * 
     * @param  {Object} query 
     */
    decodeQueryString: function(query) {

      if ( app.config.debug ) console.log('decodeQueryString', query)

      var json = atob(query['import']),
          json = JSON.parse(json)

      if ( typeof json === 'object' ) {
        // Read and render on page
        this.readDecodedHeroTiers(json)

        if ( app.config.debug ) console.log('decodeQueryString JSON ', json)
      } else {
        console.log('Invalid JSON parsed from Base64 string')
      }
      
    },

    /**
     * Read Decoded Hero Tiers
     * Similar to readSavedHeroTiers but doesnt call from LS
     * 
     * @param  {Object} tiers 
     */
    readDecodedHeroTiers: function(tiers) {

      if ( app.config.debug ) console.log('readDecodedHeroTiers', tiers)

      $.each(tiers, function (tier, heroes) {
        
        heroes.forEach(function (hero) {
          
          // Find hero in left column
          var $hero = $('.hero[data-name="'+hero+'"]'),
              $tier = $('.tier[data-tier="'+tier+'"]')

          $hero.appendTo( $tier )

        })
      })

    },

    /**
     * Count Heroes By IP
     * @param  {[type]} heroes [description]
     * @return {[type]}        [description]
     */
    countHeroesByIP: function(heroes) {

      var _this = heroes || app.heroes;

      var ips = {
        'blizzard' : 0,
        'diablo' : 0,
        'overwatch' : 0,
        'starcraft' : 0,
        'warcraft' : 0
      }

      $.each( _this.names, function (name, hero) {

        var ip = hero.ip;
            ip = ip.toLowerCase()

        ips[ip]++;

      })

      return ips;

    },

    /**
     * Render Hero IP Counts
     * @return {[type]} [description]
     */
    renderHeroIPCounts: function() {
      
      var _this = app.heroes,
          ips   = _this.countHeroesByIP()

      $.each( ips, function (ip, count) {
        console.log(ip, count)

        var $el = app.$el.ip_counts.find('#ip-count--'+ip)

        $el.html(count)
      })


    },
    
        /**
     * Count Heroes By Role
     * @param  {[type]} heroes [description]
     * @return {[type]}        [description]
     */
    countHeroesByRole: function(heroes) {

      var _this = heroes || app.heroes;

      var roles = {
        'assassin' : 0,
        'specialist' : 0,
        'support' : 0,
        'warrior' : 0
      }

      $.each( _this.names, function (name, hero) {

        var role = hero.role;
            role = role.toLowerCase()

        roles[role]++;

      })

      return roles;

    },

    /**
     * Render Hero Role Counts
     * @return {[type]} [description]
     */
    renderHeroRoleCounts: function() {
      
      var _this = app.heroes,
          roles   = _this.countHeroesByRole()

      $.each( roles, function (role, count) {
        console.log(role, count)

        var $el = app.$el.role_counts.find('#role-count--'+role)

        $el.html(count)
      })


    }

  }







  /**
   * Forms
   */
  app.forms = {

    init: function() {

    },

  }



  /**
   * Loader
   */
  app.loader = {

    show : function() {

      app.$el.loader.show()

    },

    hide : function() {

      app.$el.loader.hide()

    }

  }




  /**
   * URL Shortener
   */
  app.urlShortener = {

    url : 'http://is.gd/create.php?format=simple&url=',

    create: function(save_url, callback) {
      $.ajax({
        url: 'http://is.gd/create.php?format=simple&url=' + save_url,
        type: 'GET',
        dataType: 'json',
        data : {
          format: 'json'
        }
      })
      .done(function (data) {
        callback(data)
      })
      .fail(function (data) {
        console.log('urlShortener error: ', data )
      })
      
    }
  }


  /**
   * Hash Parser
   */
  app.hasher = {

    /**
     * Read
     * @return {Object} params
     */
    read: function() {

      var _this  = app.hasher,
          params = {};

      var e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&;=]+)=?([^&;]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
          q = window.location.hash.substring(1);

      while (e = r.exec(q))
         params[d(e[1])] = d(e[2]);

      if ( !$.isEmptyObject(params) )  {
        console.log('%cHASH', 'color:'+app.console.color.hash, params )
        _this.parse(params)
        return params;
      } else {
        return false;
      }
    },

    /**
     * Parse
     * 
     * @param  {Object} hash 
     */
    parse: function(hash) {

      // Modals
      if ( hash.hasOwnProperty('modal') ) {
        app.modals.modalShow( '#'+hash.modal )
      }

      // Admin Settings
      if ( hash.hasOwnProperty('settings') ) {
        var setting = hash.settings

        if( document.getElementById('admin-settings') ) {
          var $item = app.$el.menu.settings.find('.menu-settings__setting--'+setting);
          $item.click()
        }
      }

    }




  }






  /**
   * Curl Request
   * 
   * @param  {Object} options 
   *        
   */
  function curlRequest(options) {

    var options = options || {},
        request;

    options.url        = options.url || '';
    options.data_type  = options.data_type || 'xml';
    options.parse_json = options.parse_json || true;
    options.callback   = options.callback || undefined;

    request = $.ajax({
      url: 'ajax.php',
      type: 'POST',
      data : {
        action : 'curl',
        url : url,
        convertXML : true
      }
    })
    .done(function (data) {
      
      if ( options.parse_json ) {
        var json  = $.parseJSON(data),
            items = json.channel.item

        callback(items)
      } else {
        callback(data)
      }

    })
    .fail(function (data) {
      console.log("error", data);

      callback(data)
    })
  }  


  /**
   * searchStringInArray
   */
  function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].match(str)) return j;
    }
    return -1;
  }


  /**
   * substringBetween
   */
  function substringBetween( string, start, end ) {
    return string.substring( show.link.lastIndexOf(start)+1, show.link.lastIndexOf(end) );
  }

  /**
   * replaceAllInString
   */
  function replaceAllInString(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  function rootLocation() {

    var href = window.location.href,
        hash = window.location.hash;

    if ( hash.length > 0 ) {
      return href.replace(hash, '')
    } else {
      return href.replace('#', '')
    }
  }

  function rootLocationRemoveQuery() {

    var href = window.location.href,
        href = href.substring(0, href.indexOf('?'))

    return href;

  }


  /**
   * Size Prototype
   * 
   * @param  {Object} obj 
   * @return {Integer}     
   */
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  /**
   * __
   * Helper method for selecting DOM element by ID
   * 
   * @param  {String} id 
   * @return {HTMLElement} 
   */
  function __(id) {
    return document.getElementById(id)
  }


  /**
   * Syntax Highlight
   * 
   * @param  {String|Object} json 
   * @return {String} 
   */
  function syntaxHighlight(json) {

    if (typeof json != 'string') {
     json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
 }

  /**
   * Query String
   * Get the query string form the URL
   *
   * @returns {Object} params
   */
  function QueryString() {
    var params = {};

    if (location.search) {
        var parts = location.search.substring(1).split('&');

        for (var i = 0; i < parts.length; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
        }
    }

    return params;
  }






  /**
   * EVENT: Document Ready
   * @jquery - $(document).ready(function(){  })
   *
   */
  document.addEventListener('DOMContentLoaded', function (event) {


    
  })

  /**
   * EVENT: Window Load
   * @jquery - $(window).load(function(){  })
   */
  window.addEventListener('load', function (event) {
  
    app.hasher.read()
    
  })


  app.init()

  return app;
})(jQuery);
