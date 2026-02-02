import sortByHealthDesc from '../src/sortByHealthDesc';

test('sorts heroes by health descending (deep equality check)', () => {
    const input = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    expect(sortByHealthDesc(input)).toEqual(expected);
});

test('does not mutate the original array (purity)', () => {
    const input = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const snapshot = JSON.parse(JSON.stringify(input));

    sortByHealthDesc(input);

    expect(input).toEqual(snapshot);
});

test('toBe fails for different object/array references even if contents match', () => {
    const a = [{ name: 'маг', health: 100 }];
    const b = [{ name: 'маг', health: 100 }];

    expect(a).not.toBe(b);
    expect(a).toEqual(b);
});

test('toBe works for the same reference', () => {
    const a = [{ name: 'маг', health: 100 }];
    const same = a;

    expect(a).toBe(same);
});
