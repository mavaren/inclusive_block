const MULTIDOT_PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+[.·•]s)/g
const S_SINGLEDOT_PLURIAL_PATTERN = /(s[.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGLEDOT_PLURIAL_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+s)/g
const SINGLEDOT_SINGULAR_PATTERN = /([.·•][a-zA-Z\u00C0-\u017F]+)/g

function purge(string) {
  return string
    .replace(MULTIDOT_PLURIAL_PATTERN, 's')
    .replace(S_SINGLEDOT_PLURIAL_PATTERN, 's')
    .replace(SINGLEDOT_PLURIAL_PATTERN, 's')
    .replace(SINGLEDOT_SINGULAR_PATTERN, '')
}

test('True positives with ·', () => {
  expect(purge('les chef·fe·s')).toBe('les chefs')
  expect(purge('les ambassadeur·rice·s')).toBe('les ambassadeurs')
  expect(purge('les Français·es sont divisé·e·s')).toBe('les Français sont divisés')
  expect(purge('tou·tes les directeur·ices sont convoqué·es')).toBe('tous les directeurs sont convoqués')
  expect(purge('professeur·e')).toBe('professeur')
  expect(purge('vif·ve')).toBe('vif')
  expect(purge("Les directeur·trice·s de ce journal sont inquiet·ète·s : iels \
                craignent que l'écriture inclusive rende mes articles \
                incompréhensibles. Je m'écrie : mais vous êtes fou·olle·s ! \
                Ne soyez pas si conservateur·trice·s !")
        ).toBe("Les directeurs de ce journal sont inquiets : iels \
                craignent que l'écriture inclusive rende mes articles \
                incompréhensibles. Je m'écrie : mais vous êtes fous ! \
                Ne soyez pas si conservateurs !")
});

test('True positives with .', () => {
  expect(purge('les chef.fe.s')).toBe('les chefs')
  //expect(purge('e.lles.ux')).toBe('eux')
  expect(purge('les ambassadeur.rice.s')).toBe('les ambassadeurs')
  expect(purge('les Français.es sont divisé.e.s')).toBe('les Français sont divisés')
  expect(purge('tou.tes les directeur.ices sont convoqué.es')).toBe('tous les directeurs sont convoqués')
  expect(purge('professeur.e')).toBe('professeur')
  expect(purge('vif.ve')).toBe('vif')
  expect(purge("Les directeur.trice.s de ce journal sont inquiet.ète.s : iels \
                craignent que l'écriture inclusive rende mes articles \
                incompréhensibles. Je m'écrie : mais vous êtes fou.olle.s ! \
                Ne soyez pas si conservateur.trice.s !")
        ).toBe("Les directeurs de ce journal sont inquiets : iels \
                craignent que l'écriture inclusive rende mes articles \
                incompréhensibles. Je m'écrie : mais vous êtes fous ! \
                Ne soyez pas si conservateurs !")
});

test('False positives with •', () => {
  expect(purge('^•ㅅ•^')).toBe('^•ㅅ•^')
});
