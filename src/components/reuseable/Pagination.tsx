import { FC } from 'react';

// ==========================================================
type PaginationProps = { className?: string; altStyle?: boolean };
// ==========================================================

// Placeholder pagination from the template: there is only one page of Tech-Talks, so the arrows are inert.
// They are <a> without href (same look as before, but clicking no longer jumps to the top of the page).
const Pagination: FC<PaginationProps> = (props) => {
  const { className = 'justify-content-center', altStyle = false } = props;

  const NextPreviousBtn = (icon: string, label: string) => {
    return (
      <a className="page-link" aria-label={label} aria-disabled="true">
        <i className={`uil ${icon}`} />
      </a>
    );
  };

  return (
    <nav className={`d-flex ${className}`} aria-label="pagination">
      <ul className={`pagination ${altStyle ? 'pagination-alt' : ''}`}>
        <li className="page-item disabled">{NextPreviousBtn('uil-arrow-left', 'Previous page')}</li>

        {[1].map((item, i) => (
          <li className={`page-item ${i === 0 ? 'active' : ''}`} key={item}>
            <button className="page-link">{item}</button>
          </li>
        ))}

        <li className="page-item">{NextPreviousBtn('uil-arrow-right', 'Next page')}</li>
      </ul>
    </nav>
  );
};

export default Pagination;
