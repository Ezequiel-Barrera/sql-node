import { IItem } from '../common/interfaces';
import { EErrorCodes } from '../common/enums';


export const isValidProduct = (producto: IItem): boolean | Error => {
  const emptyFields = getEmptyFields(producto);

  if (emptyFields.length !== 0) {
    throw {
      error: `-${EErrorCodes.ProductValidation}`,
      message: 'Todos los campos son obligatorios',
    };
  }

  if (isNaN(producto.precio) || producto.precio === 0) {
    throw {
      error: `-${EErrorCodes.ProductValidation}`,
      message:
        'Modifica el precio, tiene que ser un número',
    };
  }

  if (!isUrl(producto.foto)) {
    throw {
      error: `-${EErrorCodes.ProductValidation}`,
      message: 'La url de la foto no es válida',
    };
  }

  if (!isValidCode(producto.codigo)) {
    throw {
      error: `-${EErrorCodes.ProductValidation}`,
      message: 'El código ingresado no es válido',
    };
  }

  if (isNaN(producto.stock)) {
    throw {
      error: `-${EErrorCodes.ProductValidation}`,
      message: 'El stock debe ser un número',
    };
  }

  return true;
};

function getEmptyFields(producto: IItem) {
  throw new Error('Function not implemented.');
}
