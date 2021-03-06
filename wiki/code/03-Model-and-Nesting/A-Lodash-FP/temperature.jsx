const createActions = update => ({
  editDate: evt =>
    update(_.set("date", evt.target.value)),

  increase: amount => _evt =>
    update(_.update("value", _.add(amount))),

  changeUnits: _evt => update(model => {
    if (model.units === "C") {
      return _.merge(model, {
        units: "F",
        value: Math.round( model.value * 9 / 5 + 32 )
      });
    }
    else {
      return _.merge(model, {
        units: "C",
        value: Math.round( (model.value - 32) / 9 * 5 )
      });
    }
  })
});

const createView = actions => model => (
  <div>
    <div>Date: <input type="text" size="10" value={model.date} onChange={actions.editDate}/></div>
    <span>Temperature: {model.value}&deg;{model.units} </span>
    <div>
      <button onClick={actions.increase(1)}>Increase</button>
      <button onClick={actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button onClick={actions.changeUnits}>Change Units</button>
    </div>
  </div>
);

const createTemperature = update => ({
  model: () => ({
    date: "",
    value: 20,
    units: "C"
  }),

  view: createView(createActions(update))
});
