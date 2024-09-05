import { FC, PropsWithChildren } from 'react';
import SocialLinks from 'components/reuseable/SocialLinks';

// ==============================================================

interface WidgetProps extends PropsWithChildren {
  title: string;
}
// ==============================================================

const Widget: FC<WidgetProps> = ({ title, children }) => (
  <div className="col-md-4">
    <div className="widget">
      <h4 className="widget-title">{title}</h4>
      {children}
    </div>
  </div>
);

const Footer19: FC = () => {
  return (
    <footer className="pt-12">
      <div className="container pb-12 text-center">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">
              {/* address widget column */}
              <Widget title="Address">
                <address>
                   Ramallah City, West Bank, Palestine
                </address>
              </Widget>

              {/* phone widget column */}
              <Widget title="Phone">
                <p>
                (+972) 059-938-7258
                </p>
              </Widget>

              {/* email widget column */}
              <Widget title="E-mail">
                <p>
                  <a href="mailto:bara.qabaja@gmail.com" className="link-body">
                  bara.qabaja@gmail.com                  </a>{' '}
                  <br className="d-none d-md-block" />
                  <a href="mailto:ceo@sharkod.com" className="link-body">
                  ceo@sharkod.com
                  </a>
                </p>
              </Widget>
            </div>

            <p>© 2024 Bara Qabaja. All rights reserved.</p>

            {/* social link list */}
            <SocialLinks className="nav social justify-content-center" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer19;
