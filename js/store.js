let state = {
  pages: {
    planechase: {
      currentCard: undefined,
      remainingDeck: []
    },
    search: undefined,
    tools: undefined
  },
  currentPage: 'home',
  players: [],
  cards: []
};

let renderFn;

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function updateCard(state, card) {
  const planechase = Object.assign({}, state.pages.planechase, {currentCard: card});
  const pages = Object.assign({}, state.pages, { planechase });
  return Object.assign({}, state, { pages });
}

function updateCards(state, cards) {
  return Object.assign({}, state, { cards });
}

function nextCard(state) {
  const planechase = Object.assign({}, state.pages.planechase);
  if(planechase.remainingDeck.length <= 0){
    planechase.remainingDeck = state.cards.slice(0);
  }
  planechase.currentCard = sample(planechase.remainingDeck);
  planechase.remainingDeck = planechase.remainingDeck.filter(
    card => card.id !== planechase.currentCard.id
  );

  const pages = Object.assign({}, state.pages, { planechase });
  return Object.assign({}, state, { pages })
}

function changePage(state, page){
  return Object.assign({}, state, { currentPage: page });
}

const actions = {
  UPDATE_CARD: (state, action) => updateCard(state, action.card),
  UPDATE_CARDS: (state, action) => updateCards(state, action.cards),
  NEXT_CARD: (state, action) => nextCard(state),
  CHANGE_PAGE: (state, action) => changePage(state, action.page)
}

module.exports = {
  dispatch: function(action) {
    state = actions[action.type](state, action);
    renderFn(state)
  },
  getState: () => state,
  onChange: fn => { renderFn = fn; fn(state) }
}
