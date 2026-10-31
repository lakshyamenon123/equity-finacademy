export default function FaqList({ items }) {
  return (
    <div className="faq-list reveal">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            {item.q}
            <span className="plus">+</span>
          </summary>
          <p>{item.text}</p>
        </details>
      ))}
    </div>
  );
}
