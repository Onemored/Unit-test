import healthStatus from '../src/health';

test('returns healthy when health is > 50', () => {
    expect(healthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(healthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
});

test('returns wounded when health is between 50 and 15 inclusive', () => {
    expect(healthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(healthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('returns critical when health is < 15', () => {
    expect(healthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(healthStatus({ name: 'Маг', health: 0 })).toBe('critical');
});
