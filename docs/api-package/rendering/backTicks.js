module.exports = function backTicks() {
  return {
    name: 'backTicks',
    process(str) {
      return str.split('|').map(word => `<code>${word}</code>`).join(' | ');
    },
  };
};
