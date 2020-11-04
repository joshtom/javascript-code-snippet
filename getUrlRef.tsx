const getCode = useCallback(() => {
    const { location } = props;
    const query = new URLSearchParams(location.search);
    const code = query.get("ref");
    if (code) {
      setInput((prevState: FormState) => {
        return { ...prevState, referred_by: code };
      });
    }
  }, []);

  useEffect(() => {
    getCode();
  }, [getCode]);

//   For example http://localhost:3000/accounts/register?ref=JOSHUA1234567