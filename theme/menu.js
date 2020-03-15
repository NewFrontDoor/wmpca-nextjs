export default {
  width: '160px',
  margin: '0',
  padding: '0',
  li: {
    listStyle: 'none',
    position: 'relative',
    margin: '0',
    a: {
      color: 'text',
      padding: '15px',
      fontFamily: 'sans-serif',
      fontSize: '18px',
      textTransform: 'uppercase',
      fontWeight: '300',
      display: 'block'
    },
    'a:hover': {
      background: 'light',
      color: 'accent'
    },
    '&:hover': {
      ul: {
        display: 'block'
      }
    },
    'li a.active': {
      color: 'accent'
    }
  },
  'li.first': {
    marginLeft: '0',
    borderLeft: 'none'
  },
  ul: {
    padding: '0',
    position: 'absolute',
    backgroundColor: 'light',
    top: '2px',
    left: '145px',
    zIndex: '1000',
    display: 'none',
    width: '170px',
    borderTop: '2px solid accent',
    li: {
      padding: '7px',
      margin: '0',
      borderLeft: 'none',
      borderBottom: '1px solid light',
      a: {
        fontSize: '13px',
        textTransform: 'none',
        color: 'text',
        padding: '0 15px',
        '&:hover': {
          background: 'transparent',
          color: 'accent'
        }
      }
    },
    ul: {
      zIndex: '1001',
      margin: '0',
      left: '14.15em',
      top: '-2px'
    }
  }
};
