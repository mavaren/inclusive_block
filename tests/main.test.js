import purge from '../src/purge.js'

test('True positives', () => {
  expect(purge('les chef·fe·s')).toBe('les chefs')
  expect(purge('les ambassadeur·rice·s')).toBe('les ambassadeurs')
  expect(purge('les Français·es sont divisé·e·s')).toBe('les Français sont divisés')
  expect(purge('tou·tes les directeur·ices sont convoqué·es')).toBe('tous les directeurs sont convoqués')
  expect(purge('tou·te.s les directeur·ice.s sont convoqué·es')).toBe('tous les directeurs sont convoqués')
  expect(purge('professeur·e')).toBe('professeur')
  expect(purge('vif·ve')).toBe('vif')
  expect(purge('vif·ve.s')).toBe('vifs')
  expect(purge("Les directeur·trice·s de ce journal sont inquiet·ète·s : iels \
                craignent que l'écriture inclusive rende mes articles \
                incompréhensibles. Je m'écrie : mais vous êtes fou·olle·s ! \
                Ne soyez pas si conservateur·trice·s !")
        ).toBe("Les directeurs de ce journal sont inquiets : iels \
                craignent que l'écriture inclusive rende mes articles \
                incompréhensibles. Je m'écrie : mais vous êtes fous ! \
                Ne soyez pas si conservateurs !")
});

test('False positives', () => {
  expect(purge('^•ㅅ•^')).toBe('^•ㅅ•^')
  expect(purge('content.js')).toBe('content.js')
});
