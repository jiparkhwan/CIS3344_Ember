import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | lex park', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
  });

  test('visiting /rentals/grand-old-mansion', async function(assert) {
    await visit('/rentals/grand-old-mansion');

    assert.equal(currentURL(), '/rentals/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('h2').containsText('Grand Old Mansion');
    assert.dom('.rental.detailed').exists();
     assert.dom('.share.button').hasText('Share on Twitter');

    let button = find('.share.button');

    let tweetURL = new URL(button.href);
    assert.equal(tweetURL.host, 'twitter.com');

    assert.equal(
      tweetURL.searchParams.get('url'),
      `${window.location.origin}/rentals/grand-old-mansion`
    );
  });

  test('visiting /tutorial', async function(assert) {
    await visit('/tutorial');

    assert.equal(currentURL(), '/tutorial');
    assert.dom('nav').exists();
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('About LexPark Inc.');
  });

  test('visiting /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/login');
    assert.dom('nav').exists();
  });

  test('visiting /host', async function(assert) {
    await visit('/host');

    assert.equal(currentURL(), '/host');
    assert.dom('nav').exists();
  });

  test('visiting /search', async function(assert) {
    await visit('/search');

    assert.equal(currentURL(), '/search');
    assert.dom('nav').exists();
    
  });

  test('navigating using the nav-bar', async function(assert){
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-about').hasText('About Us');
    assert.dom('nav a.menu-login').hasText('Log In');
    assert.dom('nav a.menu-host').hasText('Host A Stay');
    assert.dom('nav a.menu-search').hasText('Search');
    assert.dom('nav a.menu-tutorial').hasText('Tutorial');

    await click('nav a.menu-tutorial');
    assert.equal(currentURL(), '/tutorial');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-login');
    assert.equal(currentURL(), '/login');

    await click('nav a.menu-host');
    assert.equal(currentURL(), '/host');

    await click('nav a.menu-search');
    assert.equal(currentURL(), '/search');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
