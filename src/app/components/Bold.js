function Bold({ children, bold }) {
    return (
      <span style={{ fontWeight: bold ? 'bold' : 'normal' }}>
        {children}
      </span>
    );
  }

  export default Bold;