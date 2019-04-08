/* eslint-disable no-undef */
import DateCalculator from './date-calculator'

let dc = new DateCalculator()

test('_formatMonthsWithLocale', () => {
  const plEnd = monthNum => {
    let end = 'mniej niż 1 miesiąc'
    if (monthNum === 1) {
      end = '1 miesiąc'
    } else if (monthNum > 1 && monthNum < 5) {
      end = monthNum + ' miesiące'
    } else if (monthNum >= 5) {
      end = monthNum + ' miesięcy'
    }
    return end
  }
  for (let i = 0; i <= 11; i++) {
    expect(dc._formatMonthsWithLocale(i, dc._Locale.Pl)).toBe(plEnd(i))
  }

  const enEnd = monthNum => {
    let end = 'less than 1 month'
    if (monthNum === 1) {
      end = '1 month'
    } else if (monthNum > 1) {
      end = monthNum + ' months'
    }
    return end
  }
  for (let i = 0; i <= 11; i++) {
    expect(dc._formatMonthsWithLocale(i, dc._Locale.En)).toBe(enEnd(i))
  }
})

test('generateDiffWithLang with real data', () => {
  expect(
    dc.generateDiffWithLang(dc._Simteract.from, dc._Simteract.to, dc._Locale.Pl)
  ).toBe('(1 rok, 10 miesięcy)')
  expect(
    dc.generateDiffWithLang(
      dc._Freelancer.from,
      dc._Freelancer.to,
      dc._Locale.Pl
    )
  ).toBe('(6 miesięcy)')
  expect(
    dc.generateDiffWithLang(
      dc._RedRooster.from,
      dc._RedRooster.to,
      dc._Locale.Pl
    )
  ).toBe('(2 lata, 6 miesięcy)')
  expect(
    dc.generateDiffWithLang(dc._Wedzony.from, dc._Wedzony.to, dc._Locale.Pl)
  ).toBe('(6 miesięcy)')
})

test('generateDiffWithLang with test data', () => {
  expect(
    dc.generateDiffWithLang(
      new Date(2017, 0),
      new Date(2018, 11),
      dc._Locale.Pl
    )
  ).toBe('(2 lata)')
  expect(
    dc.generateDiffWithLang(new Date(2011, 0), new Date(2018, 0), dc._Locale.Pl)
  ).toBe('(7 lat)')
  expect(
    dc.generateDiffWithLang(new Date(2018, 2), new Date(2019, 6), dc._Locale.Pl)
  ).toBe('(1 rok, 5 miesięcy)')
  expect(
    dc.generateDiffWithLang(new Date(2017, 2), new Date(2019, 8), dc._Locale.Pl)
  ).toBe('(2 lata, 7 miesięcy)')
  expect(
    dc.generateDiffWithLang(
      new Date(2017, 2),
      new Date(2019, 11),
      dc._Locale.Pl
    )
  ).toBe('(2 lata, 10 miesięcy)')
})
