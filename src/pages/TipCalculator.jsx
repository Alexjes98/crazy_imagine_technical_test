import { useState, Fragment } from 'react'
import { Card, CardActionArea, CardHeader, CardContent, CardActions } from '@mui/material';
import { Typography, TextField, Button } from '@mui/material';

const TipCalculator = (props) => {

  const [totalAmountInputValue, setTotalAmountInputValue] = useState('')
  const [tipPercentageInputValue, setTipPercentageInputValue] = useState('')

  const [totalPayment, setTotalPayment] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)

  const handleChangeTotalAmount = (e) => {
    setTotalAmountInputValue(e.target.value)
  }

  const handleChangeTipPercentage = (e) => {
    setTipPercentageInputValue(e.target.value)
  }
  const handleClear = () => {
    setTotalAmountInputValue('')
    setTipPercentageInputValue('')
  }
  const handleCalculate = () => {
    const tipAmount = parseFloat(totalAmountInputValue) * ( parseFloat(tipPercentageInputValue) / 100)
    setTipAmount(tipAmount)
    setTotalPayment(parseFloat(totalAmountInputValue) + tipAmount)
  }

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Calculadora de propinas
          </Typography>
          <TextField
            label="Monto total"
            variant="outlined"
            fullWidth
            type="number"
            defaultValue={totalAmountInputValue}
            onChange={(e) => handleChangeTotalAmount(e)}
            style={{ margin: '1rem 0' }}
          />

          <TextField
            label="Porcentaje de propina"
            variant="outlined"
            fullWidth
            type="number"
            defaultValue={tipPercentageInputValue}
            onChange={(e) => handleChangeTipPercentage(e)}
            style={{ margin: '1rem 0' }}
          />
          <CardActions>
            <Button variant="contained" onClick={handleCalculate}>
              Calcular
            </Button>
            <Button variant='contained' onClick={handleClear}>
              Limpiar
            </Button>
          </CardActions>
          {tipAmount > 0 && totalPayment > 0 && (
            <div style={{ marginTop: '1rem' }}>
              <Typography variant="body1">
                Porcentaje de propina: ${tipAmount.toFixed(2)}
              </Typography>
              <Typography variant="body1">
                Total a pagar: ${totalPayment.toFixed(2)}
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default TipCalculator