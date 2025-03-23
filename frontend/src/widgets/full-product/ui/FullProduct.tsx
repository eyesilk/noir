import { FC } from 'react';
import { EntFullProduct } from '../../../entites/full-product';
import { useSingleProduct } from '../../../features/products/api/hooks/useSingleProduct';
import { useParams } from 'react-router-dom';
import { UiLoader } from '../../../shared/loader';
import { useBagFuncs, useBagStore, useRefetchBag } from '../../../features/bag';
import { useScrollTo } from '../lib/useScrollTo';
import { useRefirectIfError } from '../lib/useRedirectIfError';

export const FullProduct: FC = () => {
  const params = useParams<{ id: string }>();
  const { isSuccess, onAdd } = useBagFuncs();
  const bagProducts = useBagStore((state) => state.bagProducts);
  const totalQuantity = bagProducts
    .filter((item) => item.productId === params.id)
    .reduce((sum, item) => sum + item.quantity, 0);

  const { data: product, isError, isLoading } = useSingleProduct(params.id!);

  useScrollTo();
  useRefirectIfError(isError);
  useRefetchBag(isSuccess);

  return (
    <>
      {product && !isError && !isLoading ? (
        <EntFullProduct
          id={product.id}
          brandName={product.brand!.name}
          name={product.name!}
          imageUrl={product.imageUrl!}
          price={product.price}
          sizes={product.sizes!}
          description={product.description!}
          composition={product.composition!}
          instructions={product.instructions!}
          country={product.country!}
          onAdd={onAdd}
          isAdded={!!bagProducts.find((item) => item.productId === params.id)}
          quantity={totalQuantity}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UiLoader />
        </div>
      )}
    </>
  );
};
