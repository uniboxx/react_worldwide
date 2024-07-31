// Uses the same styles as Product
import PageNav from '../components/PageNav';
import styles from './Product.module.css';
import IMAGES from '../images/Images';

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src='/img-1.jpg' alt='overview of a large city with skyscrapers' />
      </section>
    </main>
  );
}
