const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    const x = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(x);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string `The zoo is closed` (Já que o Zoo está sempre fechado na segunda)', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string `The zoo is open`', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string `The zoo is closed`', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: `The day must be valid. Example: Monday`', () => {
    try {
      getOpeningHours('Thu', '09:00-AM');
    } catch (error) {
      expect(error.message).toBe('The day must be valid. Example: Monday');
    }
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: `The abbreviation must be \'AM\' or \'PM\'`', () => {
    try {
      getOpeningHours('Friday', '09:00-ZM');
    } catch (error) {
      expect(error.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
    }
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: `The hour should represent a number`', () => {
    try {
      getOpeningHours('Saturday', 'C9:00-AM');
    } catch (error) {
      expect(error.message).toBe('The hour should represent a number');
    }
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: `The minutes should represent a number`', () => {
    try {
      getOpeningHours('Sunday', '09:c0-AM');
    } catch (error) {
      expect(error.message).toBe('The minutes should represent a number');
    }
  });
  it('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: `The hour must be between 0 and 12`', () => {
    try {
      getOpeningHours('Monday', '13:00-AM');
    } catch (error) {
      expect(error.message).toBe('The hour must be between 0 and 12');
    }
  });
  it('ara os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: `The minutes must be between 0 and 59`', () => {
    try {
      getOpeningHours('Tuesday', '09:60-AM');
    } catch (error) {
      expect(error.message).toBe('The minutes must be between 0 and 59');
    }
  });
});
