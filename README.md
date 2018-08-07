# Arquivo Inicial do Projeto

## Considerações Importantes

### Android
### /node_modules/react-native/react.gradle 
doLast {
                    def moveFunc = { resSuffix ->
                        File originalDir = file("${resourcesDir}/drawable-${resSuffix}")
                        if (originalDir.exists()) {
                            File destDir = file("${resourcesDir}/drawable-${resSuffix}-v4")
                            ant.move(file: originalDir, tofile: destDir)
                        }
                    }
                    moveFunc.curry("ldpi").call()
                    moveFunc.curry("hdpi").call()
                    moveFunc.curry("xhdpi").call()
                    moveFunc.curry("mdpi").call()
                    moveFunc.curry("xxhdpi").call()
                    moveFunc.curry("xxxhdpi").call()
                }
