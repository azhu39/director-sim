var stone_diff = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAIAAgADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCE8UlOcAAYplIYtAWjmlGaACiiikAobFG7NIAKdQAE0maD0pM0ALSHrS0dRQADqKd/F9aaODzQTmgB2cfhSlwRxUfU0CgB7MDzUdLnFG4UAJRTty0bloAbSHrT9y01uTxQA2nLTaUUCBh3plS9RTGGKYx69KO9C9KKAENJQetKBQAL1pWXNGMClz60AR04fdFKy0D7ooAQU6minUAJ/FS0g60tIBDS9qTqacaAI2600U403vTEOpynmm0tAxxFIPSlzQR3FADe+KctIRmlxigBKWipANo5oAZt45qOpSc1GetACUUUUAFKKTvThQAo4ob7ppKXqKABeoqRulRA4NOL54oARulKnKU00IcAigB9ITSE0gpA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7ZqKigCTeKTcKZRQA/cKUOoqOigB5cGjcKZRQBIHANBcZqOigCUOoNP85c96r0UATmVT60nmL71DRRYCUyKfWk3io6KLASbxS+YuMDNRUUrASbxSrIAe9RUU7AT+anvR5qe9QUUrAT+avvS+cvvVeiiwXJjKM96PNX3qGiiwE3mL70eYvvUNFFguTeYvvR5i+9Q0UWAm81fenecmO9V6KYFoToBzmj7Qnv8AlVWiiwFr7Qnv+VNMyds1XoosAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k=";
