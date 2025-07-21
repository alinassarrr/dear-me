const TextArea = ({ message, setData, form }) => {
  return (
    <div className="message">
      <label htmlFor="message">Your Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Write a message to your future self or to the world..."
        onChange={(e) => setData({ ...form, message: e.target.value })}
        value={message}
      ></textarea>
    </div>
  );
};

export default TextArea;
