var Timeline = React.createClass({
  propTypes: {
    year: React.PropTypes.number,
  },

  initSlider: function() {
    $(this.refs.slider)
    .slider({
      formatter: function(value) {
        return 'Год: ' + value;
      }
    });
  },

  componentDidMount: function() {
    this.initSlider();
  },

  render: function() {
    return (
      <div className="form-group">
        1067 <input ref="slider" type="text" data-slider-min="1067" data-slider-max="2016" data-slider-step="1" data-slider-value="1887"/> 2016
      </div>
    );
  }
});
