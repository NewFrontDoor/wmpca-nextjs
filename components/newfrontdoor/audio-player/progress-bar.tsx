import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Range as RangeBase, getTrackBackground} from 'react-range';
import type {IProps} from 'react-range/lib/types';

type RangeProps = Partial<IProps> &
  Pick<
    IProps,
    'values' | 'min' | 'max' | 'onChange' | 'renderTrack' | 'renderThumb'
  >;

// theme-ui's JSX namespace intersects the raw prop type back over React's
// LibraryManagedAttributes (see @theme-ui/core jsx-namespace.d.ts), so
// react-range's defaultProps stop counting as optional. Re-expose the class
// with those props marked optional again.
const Range = RangeBase as unknown as new (
  props: RangeProps
) => Omit<RangeBase, 'props'> & {props: RangeProps};

type ProgressBarProps = {
  value: number;
  max: number;
  onChange: (values: number) => void;
  step?: number;
  isInteracting: boolean;
  color?: string;
  isInvert?: boolean;
  label?: string;
};

const ProgressBar = forwardRef<RangeBase, ProgressBarProps>(
  (
    {
      value,
      max,
      onChange,
      step = 1,
      isInteracting,
      color = '#548BF4',
      isInvert = false,
      label = 'Seek'
    },
    rangeRef
  ) => {
    return (
      <Range
        ref={rangeRef}
        label={label}
        step={step}
        min={0}
        max={max}
        values={[value]}
        renderTrack={({
          props: {style, onMouseDown, onTouchStart, ref},
          children
        }) => (
          <div
            sx={{
              ...style,
              width: '100%',
              height: '42px',
              display: 'flex',
              '&:hover': {
                '.thumb': {
                  opacity: '1'
                }
              }
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <div
              ref={ref}
              style={{
                height: '4px',
                width: '100%',
                borderRadius: '4px',
                alignSelf: 'center',
                background: getTrackBackground({
                  // One colour per side of the thumb, so values.length + 1.
                  values: [value],
                  colors: [color, '#ccc'],
                  min: 0,
                  max
                })
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({props: {style, key, ...props}}) => (
          <div
            key={key}
            {...props}
            sx={{
              ...style,
              height: '42px',
              width: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              className="thumb"
              sx={{
                height: '10px',
                width: '10px',
                borderRadius: '50%',
                transition: 'opacity 0.2s linear',
                opacity: isInteracting ? '1' : '0',
                backgroundColor: isInvert ? '#EEE' : '#111'
              }}
            />
          </div>
        )}
        onChange={(values) => onChange(values[0])}
      />
    );
  }
);

export default ProgressBar;

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  isInteracting: PropTypes.bool.isRequired,
  color: PropTypes.string,
  isInvert: PropTypes.bool,
  label: PropTypes.string
};
