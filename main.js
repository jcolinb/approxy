const cards = ['3ball.png',
'academy.png',
'ancestral.png',
'arbor.png',
'ballista.png',
'bargain.png',
'bayou.png',
'brass.png',
'catacombs.png',
'chalice.png',
'chasm.png',
'chrome.png',
'city.png',
'coco.png',
'confluence.png',
'consult.png',
'cradle.png',
'crypt.png',
'delta.png',
'diamond.png',
'drs.png',
'emerald.png',
'fastbond.png',
'force.png',
'forge.png',
'gbrand.png',
'golem.png',
'golos.png',
'grim.png',
'hangarback.png',
'heath.png',
'jet.png',
'karn_jp.png',
'LED.png',
'library.png',
'lotus.png',
'marsh.png',
'maze.png',
'mire.png',
'moat.png',
'mtutor.png',
'mutavault.png',
'narset_jp.png',
'no.png',
'norn.png',
'oath.png',
'oboro.png',
'oko.png',
'opal.png',
'orchard.png',
'ouphe.png',
'pearl.png',
'pith.png',
'port.png',
'ravager.png',
'revoker.png',
'ruby.png',
'sapphire.png',
'scrub.png',
'serpent.png',
'shop.png',
'sol.png',
'sphere.png',
'statue.png',
'stax.png',
'strand_og.png',
'strand.png',
'strip.png',
'survival.png',
'tabernacle.png',
'tangle.png',
'tarn.png',
'teferi_jp.png',
'thalia.png',
'thorn.png',
'tks.png',
'tomb.png',
'top.png',
'trop.png',
'tundra.png',
'twister.png',
'urborg.png',
'usea.png',
'vamp.png',
'vault.png',
'void.png',
'volc.png',
'walk.png',
'waste.png',
'wheel.png',
'yawgwill.png'];


const cont = document.getElementById('cont');

const addCard = (x) => {
  const link = document.createElement('a');
  link.download = '';
  link.href = `assets/${x}`;
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundImage = `url('assets/${x}')`;
  link.append(card);
  cont.appendChild(link);
}

cards.map(addCard);
