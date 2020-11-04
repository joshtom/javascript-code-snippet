
const [showAlert, setShowAlert] = useState(false);

  const ref: any = useRef(null);
  const copyToClipBoard = () => {
    ref.current.select();
    document.execCommand("copy");
    setShowAlert(true);
  };

  <Input
  ref={ref}
  value=" https://app.fandksavings.com/account/register?ref=JOHN234"
  readOnly
/>;